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
    }
  ]
};

// Product Template Function
function createProductCard(product) {
    return `
        <div class="product-card" data-category="${product.category.toLowerCase()}" data-price="${product.price}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='pictures/placeholder.jpg'">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price}</div>
                <div class="product-actions">
                    <button class="btn btn-view" onclick="viewProduct(${product.id})">View Product</button>
                </div>
            </div>
        </div>
    `;
}

// Carousel functionality
function initProductsCarousel() {
  const productsTrack = document.getElementById('productsTrack');
  const scrollbarThumb = document.getElementById('scrollbarThumb');
  const carouselScrollbar = document.getElementById('carouselScrollbar');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  // Clear existing content
  productsTrack.innerHTML = '';
  
  // Add product cards to carousel
  productsData.products.forEach(product => {
    const productCard = createProductCard(product);
    productsTrack.innerHTML += productCard;
  });
  
  let currentPosition = 0;
  const cardWidth = 330; // 300px card + 30px gap
  const visibleCards = 3;
  const totalCards = productsData.products.length;
  const maxPosition = Math.max(0, (totalCards - visibleCards) * cardWidth);
  
  // Update scrollbar position
  function updateScrollbar() {
    if (maxPosition === 0) {
      scrollbarThumb.style.transform = `translateX(0%)`;
      return;
    }
    const scrollPercentage = Math.abs(currentPosition) / maxPosition * 100;
    scrollbarThumb.style.transform = `translateX(${scrollPercentage}%)`;
  }
  
  // Next button click
  nextBtn.addEventListener('click', () => {
    if (currentPosition > -maxPosition) {
      currentPosition = Math.max(-maxPosition, currentPosition - cardWidth);
      productsTrack.style.transform = `translateX(${currentPosition}px)`;
      updateScrollbar();
    }
  });
  
  // Previous button click
  prevBtn.addEventListener('click', () => {
    if (currentPosition < 0) {
      currentPosition = Math.min(0, currentPosition + cardWidth);
      productsTrack.style.transform = `translateX(${currentPosition}px)`;
      updateScrollbar();
    }
  });
  
  // Scrollbar drag functionality
  let isDragging = false;
  let startX = 0;
  let scrollbarStartX = 0;
  
  scrollbarThumb.addEventListener('mousedown', (e) => {
    if (maxPosition === 0) return;
    isDragging = true;
    startX = e.clientX;
    scrollbarStartX = currentPosition;
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isDragging || maxPosition === 0) return;
    
    const deltaX = e.clientX - startX;
    const scrollbarWidth = carouselScrollbar.offsetWidth - scrollbarThumb.offsetWidth;
    const dragPercentage = deltaX / scrollbarWidth;
    
    let newPosition = scrollbarStartX - (dragPercentage * maxPosition);
    newPosition = Math.max(-maxPosition, Math.min(0, newPosition));
    
    currentPosition = newPosition;
    productsTrack.style.transform = `translateX(${currentPosition}px)`;
    updateScrollbar();
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
  
  // Set scrollbar thumb width based on visible cards
  if (totalCards > 0) {
    const thumbWidth = Math.min(100, (visibleCards / totalCards) * 100);
    scrollbarThumb.style.width = `${thumbWidth}%`;
  }
  
  // Touch events for mobile
  let touchStartX = 0;
  let touchCurrentX = 0;
  
  productsTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });
  
  productsTrack.addEventListener('touchmove', (e) => {
    touchCurrentX = e.touches[0].clientX;
  });
  
  productsTrack.addEventListener('touchend', () => {
    const diff = touchStartX - touchCurrentX;
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        // Swipe left - next
        if (currentPosition > -maxPosition) {
          currentPosition = Math.max(-maxPosition, currentPosition - cardWidth);
        }
      } else {
        // Swipe right - previous
        if (currentPosition < 0) {
          currentPosition = Math.min(0, currentPosition + cardWidth);
        }
      }
      productsTrack.style.transform = `translateX(${currentPosition}px)`;
      updateScrollbar();
    }
  });
  
  // Initialize scrollbar position
  updateScrollbar();
}
function viewProduct(productId) {
  alert(`Viewing product ${productId}`);
}

function editProduct(productId) {
  alert(`Editing product ${productId}`);
}

const images = [
  'pictures/home1.png',
  'pictures/home2.png',
  'pictures/home3.png'
];

const slides = document.querySelectorAll('.hero-slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let current = 0;

// Assign background images
slides.forEach((slide, index) => {
  slide.style.backgroundImage = `url(${images[index]})`;
});

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 3000);

// Initialize first slide
showSlide(current);

// Button interactions
document.querySelector('.cta-button').addEventListener('click', function() {
  alert('Exploring our collection!');
});

document.querySelector('.learn-more').addEventListener('click', function() {
  alert('Learning more about Revive Project!');
});

document.querySelector('.sign-in').addEventListener('click', function() {
  alert('Redirecting to sign in page...');
});

document.querySelector('.sign-up').addEventListener('click', function() {
  alert('Redirecting to sign up page...');
});

// Initialize products carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
  initProductsCarousel();
});