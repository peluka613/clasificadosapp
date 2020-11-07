function init() {
  getProducts();
}

async function getProducts() {
  toggleSpinner(true);

  fetch("http://localhost:3000/api/search/latest/3", { method: "GET" })
    .then((response) => response.json())
    .then((products) => {
      toggleSpinner(false);
      renderProducts(products);
    })
    .catch((error) => {
      console.log(error);
      toggleAlert(true);
    });
}

function renderProducts(products) {
  let productsHtml = "";
  const productWrapper = document.getElementById("products-wrapper");

  products.forEach((product) => {
    productsHtml += `
      <a href="product-details.html?id=${product.ID}" class="product-link">
        <div class="product-card">
          <img src="img/${product.FOTO}" alt="imagen producto">
          <div class="product-card-text-container">
            <h4>${product.NOMBRE}</h4>
            <p>${product.DESCRIPCION}</p>
          </div>
        </div>
      </a>
    `;
  });

  productWrapper.innerHTML = productsHtml;
}

function toggleSpinner(show) {
  const spinner = document.getElementById("spinner");

  spinner.style.display = show ? "block" : "none";
}

function toggleAlert(show) {
  const alert = document.getElementById("alert");

  alert.style.display = show ? "block" : "none";
}

init();
