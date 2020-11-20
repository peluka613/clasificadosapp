function init() {
  getProducts();
  getUserData();
}

async function getProducts() {
  toggleSpinner(true);

  fetch("http://localhost:3000/api/search/latest/5", { method: "GET" })
    .then((response) => response.json())
    .then((products) => {
      toggleSpinner(false);
      renderProducts(products);
    })
    .catch((error) => {
      toggleSpinner(false);
      toggleAlert(true);
    });
}

init();
