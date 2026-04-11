/*Display and filter products by category*/
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
    name: "Sports Shorts",
    category: "women",
    price: 14.99,
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
const footerCategoryLinks = document.querySelectorAll(".footer-category-link");
const productsSection = document.querySelector("#products");

function renderProducts(items) {
  productsContainer.innerHTML = "";

  items.forEach((product) => {
    productsContainer.innerHTML += `
      <article class="product-card">
        <img src="${product.image}" alt="${product.name}" class="product-img" />
        <div class="product-content">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">€${product.price.toFixed(2)}</p>
          <button class="shop-btn">Shop Now</button>
        </div>
      </article>
    `;
  });
}

function setActiveTab(category) {
  tabButtons.forEach((btn) => {
    btn.classList.remove("active");

    if (btn.dataset.category === category) {
      btn.classList.add("active");
    }
  });
}

function filterProducts(category) {
  setActiveTab(category);

  if (category === "all") {
    renderProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    renderProducts(filteredProducts);
  }
}

renderProducts(products);

tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.dataset.category;
    filterProducts(category);
  });
});

footerCategoryLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const category = this.dataset.category;

    filterProducts(category);

    productsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/*Contact Form Validation*/ 
const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let nameValue = nameInput.value.trim();
    let emailValue = emailInput.value.trim();
    let subjectValue = subjectInput.value.trim();
    let messageValue = messageInput.value.trim();

    formMessage.classList.remove("error");
    formMessage.classList.remove("success");

    if (nameValue === "" || nameValue.length < 2) {
        formMessage.textContent = "Please enter your name.";
        formMessage.classList.add("error");
    } else if (emailValue === "" || emailValue.includes("@") === false || emailValue.includes(".") === false) {
        formMessage.textContent = "Please enter a valid email.";
        formMessage.classList.add("error");
    } else if (subjectValue === "") {
        formMessage.textContent = "Please enter a subject.";
        formMessage.classList.add("error");
    } else if (messageValue === "" || messageValue.length < 10) {
        formMessage.textContent = "Message must be at least 10 characters.";
        formMessage.classList.add("error");
    } else {
        formMessage.textContent = "Message sent successfully!";
        formMessage.classList.add("success");
        contactForm.reset();
    }
});