let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  alert("Added to cart");
}

function increaseQty(id) {
  cart.find(i => i.id === id).qty++;
  saveCart();
  location.reload();
}

function decreaseQty(id) {
  const item = cart.find(i => i.id === id);
  if (item.qty > 1) item.qty--;
  saveCart();
  location.reload();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  location.reload();
}
