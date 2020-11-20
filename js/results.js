function init() {
  getProducts();
}

async function getProducts() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get("category");
  const cityId = urlParams.get("city");
  const totalItems = document.querySelector('#total-items');

  toggleSpinner(true);

  fetch(`http://localhost:3000/api/search/filter/${cityId}/${categoryId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((products) => {
      toggleSpinner(false);
      totalItems.innerHTML = products.length;
      renderProducts(products);
    })
    .catch((error) => {
      totalItems.innerHTML = '0';
      toggleSpinner(false);
      toggleAlert(true);
    });
}

init();
