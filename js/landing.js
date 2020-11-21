const latestAPIURL =
  "http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com:4001/api/search/latest/5";

/**
 * Method to get the latest publications
 */
function getProducts() {
  toggleSpinner(true);

  fetch(latestAPIURL, { method: "GET" })
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

/**
 * Method to check the user credentials are valid
 */
function init() {
  getProducts();
}

init();
