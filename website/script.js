document.addEventListener('DOMContentLoaded', function () {
    // Select all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Attach a click event listener to each button
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the parent product element
            const product = button.closest('.product');

            // Get the product ID from the data-product-id attribute
            const productId = product.getAttribute('data-product-id');

            // You can customize this logic based on your requirements
            alert('Product ' + productId + ' added to cart!');
        });
    });
});
