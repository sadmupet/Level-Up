export function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find(item => item.id === product.id);

  if (exists) {

    exists.quantity += 1;
  } else {

    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}
