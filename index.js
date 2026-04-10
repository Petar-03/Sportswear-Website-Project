const products = [
  {
    id: 1,
    name: "Sports T-Shirt",
    category: "men",
    price: 29.99,
    image: "./img/product-1.png",
  },
  {
    id: 2,
    name: "Sports Leggings",
    category: "women",
    price: 29.99,
    image: "./img/product-2.png",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "accessories",
    price: 39.99,
    image: "./img/product-3.png",
  },
  {
    id: 4,
    name: "Hooded Jacket",
    category: "men",
    price: 49.99,
    image: "./img/product-4.png",
  },
  {
    id: 5,
    name: "Training Shorts",
    category: "men",
    price: 34.99,
    image: "./img/product-5.png",
  },
];

const productsContainer = document.querySelector(".products-container");
const tabButtons = document.querySelectorAll(".tab-btn");

function renderProducts(items) {
  productsContainer.innerHTML = "";

  items.forEach((product) => {
    productsContainer.innerHTML += `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-img" />
        <div class="product-content">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">$${product.price.toFixed(2)}</p>
          <button class="shop-btn">Shop Now</button>
        </div>
      </article>
    `;
  });
}

renderProducts(products);

tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    const category = this.dataset.category;

    if (category === "all") {
      renderProducts(products);
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      renderProducts(filteredProducts);
    }
  });
});