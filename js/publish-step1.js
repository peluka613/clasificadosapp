const nextButton = document.querySelector("#next");
const productDescription = document.querySelector("#productDescription");
const productName = document.querySelector("#productName");
const firstStepForm = document.querySelector(".first-step-form");

getCategories();
getLocations();
addListeners();

/**
 * Add listeners
 */
function addListeners() {
  productDescription.addEventListener("keyup", productDescriptionHandler);

  firstStepForm.addEventListener("submit", (event) => {
    event.preventDefault();
    validateParams();
  });
}

/**
 * Validate params before sending them
 */
function validateParams() {
  const categorySelected = document.querySelector("#categoriesWrapper .selected");
  const citySelected = document.querySelector("#citiesWrapper .selected");
  const typeOfServiceSelected = document.querySelectorAll('[name="productService"]:checked');

  if (
    productDescription.value &&
    productName.value &&
    categorySelected &&
    citySelected &&
    typeOfServiceSelected.length > 0
  ) {
    localStorage.setItem('step1', JSON.stringify({
      CATEGORIA: categorySelected.getAttribute('data-id'),
      MUNICIPIO: citySelected.getAttribute('data-id'),
      DESCRIPCION: productDescription.value,
      NOMBRE: productName.value,
      TIPO_CLASIFICADO: typeOfServiceSelected[0].value
    }));
    window.location.href = 'publish-step2.html'
  } else {
  }
}

/**
 * Handle typing event
 */
function productDescriptionHandler() {
  const charCounter = document.querySelector(".char-counter");

  charCounter.textContent = `${productDescription.value.length} / 300`;
}
