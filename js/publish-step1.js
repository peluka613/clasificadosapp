const locationsSelector = document.querySelector("#locationsWrapper");
const nextButton = document.querySelector("#next");
const productDescription = document.querySelector("#productDescription");
const productName = document.querySelector("#productName");
const typesSelector = document.querySelector("#typesWrapper");
const firstStepForm = document.querySelector(".first-step-form");

nextButton.setAttribute("disabled", true);

getCategories();
getLocations();
addListeners();

/**
 * Add listeners
 */
function addListeners() {
  productDescription.addEventListener("keyup", productDescriptionHandler);
  productDescription.addEventListener("keyup", validateParams);
  productName.addEventListener("keyup", validateParams);

  firstStepForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}

/**
 * Validate params before sending them
 */
function validateParams() {
  const nextButton = document.querySelector("#next");
  const selectedLocation = locationsSelector.getElementsByClassName("selected");
  const selectedType = typesSelector.getElementsByClassName("selected");
  let selectedLocationValue;
  let selectedTypeValue;

  if (selectedType[0]) {
    selectedTypeValue = selectedType[0].innerHTML;
  }

  if (selectedLocation[0]) {
    selectedLocationValue = selectedLocation[0].innerHTML;
  }

  if (
    productDescription.value &&
    productName.value &&
    selectedTypeValue &&
    selectedLocationValue
  ) {
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", true);
  }
}

/**
 * Handle typing event
 */
function productDescriptionHandler() {
  const charCounter = document.querySelector(".char-counter");

  charCounter.textContent = `${productDescription.value.length} / 300`;
}
