const contactNumber = document.querySelector("#contactNumber");
const uploadPhoto = document.querySelector("#uploadPhoto");
const facebookId = document.querySelector("#facebookId");
const instagramId = document.querySelector("#instagramId");
const twitterId = document.querySelector("#twitterId");
const secondStepForm = document.querySelector(".second-step-form");
let step1Data = {};

checkData();

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

function createService() {
  toggleAlert(false, "");
  toggleSpinner(true);
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
    USUARIO: userData.id
  };
  headers.append("Content-Type", "application/json");

  fetch("http://localhost:3000/api/services/", {
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
