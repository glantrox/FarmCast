document.addEventListener('DOMContentLoaded', function() {
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-input');
    const addToCartBtn = document.querySelector('.add-to-cart');
    const buyNowBtn = document.querySelector('.buy-now');

    // Quantity control
    minusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
        }
    });

    plusBtn.addEventListener('click', () => {
        let value = parseInt(quantityInput.value);
        const maxStock = 93420; // Based on available stock
        if (value < maxStock) {
            quantityInput.value = value + 1;
        }
    });

    // Validate manual input
    quantityInput.addEventListener('change', () => {
        let value = parseInt(quantityInput.value);
        if (isNaN(value) || value < 1) {
            quantityInput.value = 1;
        } else if (value > 93420) {
            quantityInput.value = 93420;
        }
    });

    // Button actions
    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        alert(`Added ${quantity} pack(s) to cart`);
    });

    buyNowBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        alert(`Proceeding to checkout with ${quantity} pack(s)`);
    });
});