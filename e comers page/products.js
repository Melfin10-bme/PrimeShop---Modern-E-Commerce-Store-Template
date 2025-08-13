// Product data
const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 89.99,
        oldPrice: 129.99,
        image: "assets/images/product1.jpg",
        rating: 4,
        category: "Electronics",
        isNew: true,
        isSale: true
    },
    {
        id: 2,
        name: "Smart Watch Fitness Tracker",
        price: 59.99,
        oldPrice: 79.99,
        image: "assets/images/product2.jpg",
        rating: 5,
        category: "Electronics",
        isNew: false,
        isSale: true
    },
    {
        id: 3,
        name: "Cotton T-Shirt Regular Fit",
        price: 19.99,
        oldPrice: 24.99,
        image: "assets/images/product3.jpg",
        rating: 3,
        category: "Fashion",
        isNew: true,
        isSale: false
    },
    {
        id: 4,
        name: "Stainless Steel Water Bottle",
        price: 24.99,
        oldPrice: 34.99,
        image: "assets/images/product4.jpg",
        rating: 4,
        category: "Home",
        isNew: false,
        isSale: true
    },
    {
        id: 5,
        name: "Wireless Charging Pad",
        price: 29.99,
        oldPrice: 39.99,
        image: "assets/images/product5.jpg",
        rating: 4,
        category: "Electronics",
        isNew: true,
        isSale: false
    },
    {
        id: 6,
        name: "Organic Cotton Throw Pillow",
        price: 34.99,
        oldPrice: 44.99,
        image: "assets/images/product6.jpg",
        rating: 5,
        category: "Home",
        isNew: false,
        isSale: true
    },
    {
        id: 7,
        name: "Leather Wallet with RFID Protection",
        price: 49.99,
        oldPrice: 59.99,
        image: "assets/images/product7.jpg",
        rating: 4,
        category: "Fashion",
        isNew: false,
        isSale: true
    },
    {
        id: 8,
        name: "Portable Bluetooth Speaker",
        price: 79.99,
        oldPrice: 99.99,
        image: "assets/images/product8.jpg",
        rating: 5,
        category: "Electronics",
        isNew: true,
        isSale: true
    }
];

// Load products on page load
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.getElementById('product-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-badges">
                ${product.isNew ? '<span class="badge new">New</span>' : ''}
                ${product.isSale ? '<span class="badge sale">Sale</span>' : ''}
            </div>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-actions">
                    <button class="quick-view"><i class="fas fa-eye"></i></button>
                    <button class="add-to-wishlist"><i class="far fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${'<i class="fas fa-star"></i>'.repeat(product.rating)}
                    ${'<i class="far fa-star"></i>'.repeat(5 - product.rating)}
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
});