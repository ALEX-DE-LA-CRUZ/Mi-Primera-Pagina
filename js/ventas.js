window.onload = function () {
    let usuarioAutenticado = localStorage.getItem('usuarioAutenticado');
    if (!usuarioAutenticado) {
        alert("Debes iniciar sesión para acceder a esta página.");
        window.location.href = "../index.html";  // Redirigir al inicio si no está autenticado
    }
};
let cart = [];
let totalPrice = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        
        // Add product to cart
        cart.push({ product, price });
        totalPrice += price;

        // Display cart
        updateCart();
    });
});

function updateCart() {
    // Clear cart list
    cartItemsList.innerHTML = '';

    // Add cart items to list
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.product} - $${item.price} <button onclick="removeFromCart(${index})">Eliminar</button>`;
        cartItemsList.appendChild(listItem);
    });

    // Update total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
    const item = cart[index];
    totalPrice -= item.price;
    cart.splice(index, 1);

    updateCart();
}
