// Products data directly in JavaScript
const productsData = {
  products: [
    {
      id: 1,
      name: "Age Style Dress",
      category: "Dresses",
      description: "Beautiful dress made from reclaimed fabrics",
      price: 60,
      image: "pictures/AgeStyleDress.jpg",
      material: "reclaimed",
      size: "M"
    },
    {
      id: 2,
      name: "Upcycled Backpack",
      category: "Accessories",
      description: "Stylish backpack from repurposed materials",
      price: 55,
      image: "pictures/UpcycledBackpack.jpg",
      material: "recycled",
      size: "One Size"
    },
    {
      id: 3,
      name: "Eco-Friendly Sweater",
      category: "longsleeve",
      description: "Warm sweater made from sustainable wool",
      price: 48,
      image: "pictures/Eco-FriendlySweater.jpg",
      material: "sustainable",
      size: "L"
    },
    {
      id: 4,
      name: "Vintage Denim Jacket",
      category: "coat",
      description: "Classic jacket made from upcycled denim",
      price: 75,
      image: "pictures/VintageDenimJacket.jpg",
      material: "reclaimed",
      size: "M"
    },
    {
      id: 5,
      name: "Sustainable T-Shirt",
      category: "Tops",
      description: "Comfortable tee from organic cotton",
      price: 35,
      image: "pictures/SustainableT-Shirt.jpg",
      material: "organic",
      size: "S"
    },
    {
      id: 6,
      name: "Recycled Skirt",
      category: "skirts",
      description: "Elegant skirt from repurposed textiles",
      price: 52,
      image: "pictures/RecycledSkirt.jpg",
      material: "recycled",
      size: "XS"
    },
    {
      id: 7,
      name: "Organic Linen Pants",
      category: "pans",
      description: "Breathable pants from organic linen",
      price: 68,
      image: "pictures/OrganicLinenPants.jpg",
      material: "organic",
      size: "M"
    },
    {
      id: 8,
      name: "Upcycled Scarf",
      category: "Accessories",
      description: "Colorful scarf from fabric remnants",
      price: 28,
      image: "pictures/UpcycledScarf.jpg",
      material: "reclaimed",
      size: "One Size"
    }
  ]
};

// Product Template Function
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category.toLowerCase()}" data-price="${product.price}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='Image not available';">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="btn btn-view" onclick="viewProduct(${product.id})">View Product</button>
                    <button class="btn btn-edit" onclick="editProduct(${product.id})">Edit</button>
                </div>
            </div>
        </div>
    `;
}

// Load and display products
function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    
    // Clear existing content
    productsGrid.innerHTML = '';
    
    // Check if we have products
    if (!productsData.products || productsData.products.length === 0) {
        productsGrid.innerHTML = 
            '<p style="text-align: center; color: #666; grid-column: 1 / -1; padding: 40px;">No products found.</p>';
        return;
    }
    
    // Create and append product cards
    productsData.products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.innerHTML += productCard;
    });
    
    // Add event listeners for filters
    setupFilters();
}

// Filter functionality
function setupFilters() {
    const categoryFilter = document.getElementById('category');
    const priceFilter = document.getElementById('price');
    const sortFilter = document.getElementById('sort');
    
    if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);
    if (priceFilter) priceFilter.addEventListener('change', filterProducts);
    if (sortFilter) sortFilter.addEventListener('change', sortProducts);
}

function filterProducts() {
    const categoryValue = document.getElementById('category').value;
    const priceValue = document.getElementById('price').value;
    const products = document.querySelectorAll('.product-card');
    
    let visibleCount = 0;
    
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        const productPrice = parseInt(product.getAttribute('data-price'));
        
        let categoryMatch = categoryValue === 'all' || productCategory === categoryValue;
        let priceMatch = true;
        
        if (priceValue === 'low') {
            priceMatch = productPrice < 50;
        } else if (priceValue === 'medium') {
            priceMatch = productPrice >= 50 && productPrice <= 100;
        } else if (priceValue === 'high') {
            priceMatch = productPrice > 100;
        }
        
        if (categoryMatch && priceMatch) {
            product.style.display = 'block';
            visibleCount++;
        } else {
            product.style.display = 'none';
        }
    });
    
    // Show message if no products match filters
    const productsGrid = document.getElementById('products-grid');
    let noResultsMsg = productsGrid.querySelector('.no-results');
    
    if (visibleCount === 0) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('p');
            noResultsMsg.className = 'no-results';
            noResultsMsg.style.cssText = 'text-align: center; color: #666; grid-column: 1 / -1; padding: 40px;';
            noResultsMsg.textContent = 'No products match your filters.';
            productsGrid.appendChild(noResultsMsg);
        }
    } else if (noResultsMsg) {
        noResultsMsg.remove();
    }
}

function sortProducts() {
    const sortValue = document.getElementById('sort').value;
    const productsGrid = document.getElementById('products-grid');
    const products = Array.from(document.querySelectorAll('.product-card'));
    
    products.sort((a, b) => {
        const priceA = parseInt(a.getAttribute('data-price'));
        const priceB = parseInt(b.getAttribute('data-price'));
        
        switch (sortValue) {
            case 'low-high':
                return priceA - priceB;
            case 'high-low':
                return priceB - priceA;
            case 'newest':
                // For newest, you might want to add a date attribute
                return 0; // Default order for now
            default:
                return 0; // Featured - keep original order
        }
    });
    
    // Clear and re-append sorted products
    products.forEach(product => productsGrid.appendChild(product));
}

// Product action functions
function viewProduct(productId) {
    alert(`Viewing product ${productId}`);
    // You can redirect to a product detail page or show a modal
    // window.location.href = `product-detail.html?id=${productId}`;
}

function editProduct(productId) {
    alert(`Editing product ${productId}`);
    // You can redirect to an edit page or show an edit form
    // window.location.href = `edit-product.html?id=${productId}`;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing products...');
    loadProducts();
});