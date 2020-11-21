const contactNumber = document.querySelector("#contactNumber");
const uploadPhoto = document.querySelector("#uploadPhoto");
const facebookId = document.querySelector("#facebookId");
const instagramId = document.querySelector("#instagramId");
const twitterId = document.querySelector("#twitterId");
const secondStepForm = document.querySelector(".second-step-form");
const createServiceAPIURL =
  "http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com:4001/api/services/";
let step1Data = {};

/**
 * Check the localstorage in order to get the data in the step1
 */
function checkData() {
  try {
    step1Data = JSON.parse(localStorage.getItem("step1"));

    if (step1Data) {
      addListeners();
    } else {
      window.location.href = "publish-step1.html";
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Add listeners
 */
function addListeners() {
  secondStepForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateParams()) {
      createService();
    }
  });
}

/**
 * Create a new services/product using the API
 */
function createService() {
  const headers = new Headers();
  const body = {
    CATEGORIA: step1Data.CATEGORIA,
    MUNICIPIO: step1Data.MUNICIPIO,
    DESCRIPCION: step1Data.DESCRIPCION,
    NOMBRE: step1Data.NOMBRE,
    TIPO_CLASIFICADO: step1Data.TIPO_CLASIFICADO,
    CELULAR: contactNumber.value,
    FOTO: uploadPhoto.value,
    FACEBOOK: facebookId.value,
    INSTAGRAM: instagramId.value,
    TWITTER: twitterId.value,
    USUARIO: userData.id,
  };

  toggleAlert(false, "");
  toggleSpinner(true);
  headers.append("Content-Type", "application/json");

  fetch(createServiceAPIURL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        toggleAlert(true, data.error);
      } else {
        localStorage.removeItem("step1");
        window.location.href = "successful-publication.html";
      }
      toggleSpinner(false);
    })
    .catch((error) => {
      toggleSpinner(false);
    });
}

/**
 * Validate params before sending them
 */
function validateParams() {
  return contactNumber.value && uploadPhoto.value;
}

/**
 * Add listeners
 */
function init() {
  checkData();
}

init();
