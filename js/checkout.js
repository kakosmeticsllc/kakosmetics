const stripe = Stripe("pk_live_51S4ZcuGkWFSwF1eu2Sg7Tck9bAkC1CFsASe0ELQoRWdZ3phje7GNUmZ6ZR8DA5MYY6XcIsd9JKnvnY6laSY1VweH00perUGW0m");

function checkout() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const lineItems = cart.map(item => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name
      },
      unit_amount: item.price * 100
    },
    quantity: item.qty
  }));

  stripe.redirectToCheckout({
    lineItems: lineItems,
    mode: "payment",
    successUrl: window.location.origin + "/success.html",
    cancelUrl: window.location.origin + "/cart.html"
  });
}
