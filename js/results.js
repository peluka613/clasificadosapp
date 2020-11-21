const filterAPIURL =
  "http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com:4001/api/search/filter";

/**
 * Get the query params and get the products with filters
 */
function getProducts() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get("category");
  const cityId = urlParams.get("city");
  const totalItems = document.querySelector("#total-items");

  toggleSpinner(true);

  fetch(`${filterAPIURL}/${cityId}/${categoryId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((products) => {
      toggleSpinner(false);
      totalItems.innerHTML = products.length;
      renderProducts(products);
    })
    .catch((error) => {
      totalItems.innerHTML = "0";
      toggleSpinner(false);
      toggleAlert(true);
    });
}

/**
 * Get product list using the filters
 */
function init() {
  getProducts();
}

init();
