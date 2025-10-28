document.addEventListener('DOMContentLoaded', function() {
    // Image Thumbnail Functionality
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Update main image
            const newImageSrc = this.getAttribute('data-image');
            mainImage.src = newImageSrc;
        });
    });
    
    // Quantity Controls
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    
    decreaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    increaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
        }
    });
    
    // Tab Functionality
    const tabHeaders = document.querySelectorAll('.tab-header');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all headers and panes
            tabHeaders.forEach(h => h.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked header and corresponding pane
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Add to Cart Functionality
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const buyNowBtn = document.querySelector('.buy-now-btn');
    
    addToCartBtn.addEventListener('click', function() {
        const size = document.getElementById('size').value;
        const quantity = document.getElementById('quantity').value;
        
        if (!size) {
            alert('Please select a size before adding to cart.');
            return;
        }
        
        // In a real application, you would add to cart here
        alert(`Added to cart: ${quantity} x Revived Denim Jacket (Size: ${size})`);
    });
    
    buyNowBtn.addEventListener('click', function() {
        const size = document.getElementById('size').value;
        const quantity = document.getElementById('quantity').value;
        
        if (!size) {
            alert('Please select a size before purchasing.');
            return;
        }
        
        // In a real application, you would proceed to checkout here
        alert(`Proceeding to checkout: ${quantity} x Revived Denim Jacket (Size: ${size})`);
    });
    
    // Size selection validation
    const sizeSelect = document.getElementById('size');
    sizeSelect.addEventListener('change', function() {
        if (this.value) {
            this.style.borderColor = '#6686AC';
        }
    });
});