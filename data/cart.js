let cart = [];
let galutineKaina = 0;

function renderCart() {
    const cartElement = document.getElementById('cart');

    // Clear current cart UI
    cartElement.innerHTML = '';

    // Render each product in the cart
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.baudosName} - $${item.baudosKaina} - ${item.quantity} `;
        
        // Add remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);

        cartElement.appendChild(li);
    });
}

function removeFromCart(index) {
    // Remove product from cart array
    cart.splice(index, 1);
    // Update cart UI
    renderCart();
    console.log(cart);
}