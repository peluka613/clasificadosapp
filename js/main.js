var userData = {};

function listeners() {
  const logoutButton = document.querySelector("#exit-button");

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "login.html";
  });

  document.querySelectorAll(".custom-select-wrapper").forEach((item) => {
    item.addEventListener("click", openSelector);
  });
}

function addCustomOpionListeners() {
  const options = document.querySelectorAll(".custom-option");

  options.forEach((option) => {
    option.removeEventListener("mousemove", () => { console.log('removed') });
  });

  options.forEach((option) => {
    option.addEventListener("click", setSelectedOption);
  });
}

function getUserData() {
  try {
    userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      const userNameTitle = document.querySelector("#name-user");

      if (userNameTitle) {
        userNameTitle.innerHTML = userData.nombre_completo;
      }
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Render type of products or services
 */
function renderListItems(items, section) {
  let itemsHtml = "";
  const itemsWrapper = document.getElementById(section);

  items.forEach((item) => {
    itemsHtml += `
        <span class="custom-option" data-id="${item.ID}">${item.NOMBRE}</span>
    `;
  });

  itemsWrapper.innerHTML = itemsHtml;
  addCustomOpionListeners();
}

function toggleSpinner(show) {
  const spinner = document.getElementById("spinner");

  spinner.style.display = show ? "block" : "none";
}

/**
 * Open list of items
 */
function openSelector() {
  this.querySelector(".custom-select").classList.toggle("open");
}

/**
 * Sets option chosen by the user
 */
function setSelectedOption() {
  const optionSelected = this.parentNode.querySelector(
    ".custom-option.selected"
  );

  if (!this.classList.contains("selected") && optionSelected) {
    optionSelected.classList.remove("selected");
  }

  this.classList.add("selected");
  this.closest(".custom-select").querySelector(
    ".custom-select__trigger span"
  ).textContent = this.textContent;
}

async function getCategories() {
  fetch("hhttp://ec2-18-220-72-102.us-east-2.compute.amazonaws.com:4001/api/categories", { method: "GET" })
    .then((response) => response.json())
    .then((categories) => {
      renderListItems(categories, "categoriesWrapper");
    })
    .catch((error) => {});
}

async function getLocations() {
  fetch("hhttp://ec2-18-220-72-102.us-east-2.compute.amazonaws.com:4001/api/locations", { method: "GET" })
    .then((response) => response.json())
    .then((locations) => {
      renderListItems(locations, "citiesWrapper");
    })
    .catch((error) => {});
}

function renderProducts(products) {
  let productsHtml = "";
  const productWrapper = document.getElementById("products-wrapper");

  products.forEach((product) => {
    productsHtml += `
      <a class="product-card" href="product-details.html?id=${product.ID}">
        <img src="img/${product.FOTO}" alt="imagen producto">
        <div class="product-card-text-container">
          <h4>${product.NOMBRE}</h4>
          <p>${product.DESCRIPCION}</p>
        </div>
      </a>
    `;
  });

  if (productsHtml === '') {
    productsHtml = '<span>No hay productos para mostrar</span>'
  }

  productWrapper.innerHTML = productsHtml;
}

function toggleAlert(show, message) {
  const alert = document.getElementById("alert");

  if (message) {
    alert.innerHTML = message;
  }

  alert.style.display = show ? "block" : "none";
}

listeners();
getUserData();
