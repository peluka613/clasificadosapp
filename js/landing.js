function init() {
  getProducts();
}

async function getProducts() {
  toggleSpinner(true);

  fetch("http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com:4001/api/search/latest/5", { method: "GET" })
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
