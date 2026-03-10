const products = [
  // TECH (17 items)
  { id: 1, name: "Laptop", category: "tech", price: 999 },
  { id: 2, name: "Smartphone", category: "tech", price: 699 },
  { id: 3, name: "Headphones", category: "tech", price: 199 },
  { id: 4, name: "Smartwatch", category: "tech", price: 249 },
  { id: 5, name: "Mechanical Keyboard", category: "tech", price: 120 },
  { id: 6, name: "Gaming Mouse", category: "tech", price: 80 },
  { id: 7, name: "Monitor 4K", category: "tech", price: 400 },
  { id: 8, name: "External SSD", category: "tech", price: 150 },
  { id: 9, name: "Webcam", category: "tech", price: 90 },
  { id: 10, name: "Bluetooth Speaker", category: "tech", price: 50 },
  { id: 11, name: "Tablet", category: "tech", price: 350 },
  { id: 12, name: "VR Headset", category: "tech", price: 499 },
  { id: 13, name: "Microphone", category: "tech", price: 130 },
  { id: 14, name: "Wireless Earbuds", category: "tech", price: 150 },
  { id: 15, name: "Router", category: "tech", price: 110 },
  { id: 16, name: "Graphics Card", category: "tech", price: 700 },
  { id: 17, name: "Power Bank", category: "tech", price: 40 },

  // CLOTHING (17 items)
  { id: 18, name: "T-Shirt", category: "clothing", price: 25 },
  { id: 19, name: "Jacket", category: "clothing", price: 85 },
  { id: 20, name: "Blue Jeans", category: "clothing", price: 50 },
  { id: 21, name: "Hoodie", category: "clothing", price: 45 },
  { id: 22, name: "Sneakers", category: "clothing", price: 120 },
  { id: 23, name: "Cotton Socks", category: "clothing", price: 10 },
  { id: 24, name: "Baseball Cap", category: "clothing", price: 20 },
  { id: 25, name: "Leather Belt", category: "clothing", price: 35 },
  { id: 26, name: "Raincoat", category: "clothing", price: 60 },
  { id: 27, name: "Sweater", category: "clothing", price: 55 },
  { id: 28, name: "Running Shorts", category: "clothing", price: 30 },
  { id: 29, name: "Scarf", category: "clothing", price: 15 },
  { id: 30, name: "Beanie", category: "clothing", price: 18 },
  { id: 31, name: "Formal Shoes", category: "clothing", price: 95 },
  { id: 32, name: "Dress Shirt", category: "clothing", price: 40 },
  { id: 33, name: "Yoga Pants", category: "clothing", price: 35 },
  { id: 34, name: "Gloves", category: "clothing", price: 22 },

  // FOOD (16 items)
  { id: 35, name: "Pizza", category: "food", price: 15 },
  { id: 36, name: "Burger", category: "food", price: 12 },
  { id: 37, name: "Sushi Platter", category: "food", price: 30 },
  { id: 38, name: "Pasta Carbonara", category: "food", price: 18 },
  { id: 39, name: "Garden Salad", category: "food", price: 10 },
  { id: 40, name: "Ice Cream", category: "food", price: 6 },
  { id: 41, name: "Coffee Beans", category: "food", price: 20 },
  { id: 42, name: "Dark Chocolate", category: "food", price: 5 },
  { id: 43, name: "Organic Honey", category: "food", price: 14 },
  { id: 44, name: "Greek Yogurt", category: "food", price: 4 },
  { id: 45, name: "Green Tea", category: "food", price: 8 },
  { id: 46, name: "Almonds", category: "food", price: 12 },
  { id: 47, name: "Fresh Apples", category: "food", price: 3 },
  { id: 48, name: "Whole Grain Bread", category: "food", price: 5 },
  { id: 49, name: "Croissant", category: "food", price: 4 },
  { id: 50, name: "Spicy Ramen", category: "food", price: 9 }
];


const container = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

function displayProducts(list) {
    container.innerHTML = ""; 
    
    if (list.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1">No products found 🔍</p>`;
        return;
    }

    list.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
            <h3>${product.name}</h3>
            <span class="tag">${product.category}</span>
            <p>$${product.price}</p>
        `;
        container.appendChild(card);
    });
}

function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const category = categorySelect.value;

    const filtered = products.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(searchText);
        const matchCategory = category === "all" || product.category === category;
        return matchSearch && matchCategory;
    });

    displayProducts(filtered);
}
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

displayProducts(products);