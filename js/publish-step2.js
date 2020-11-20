const contactNumber = document.querySelector("#contactNumber");
const uploadPhoto = document.querySelector("#uploadPhoto");
const facebookId = document.querySelector("#facebookId");
const instagramId = document.querySelector("#instagramId");
const twitterId = document.querySelector("#twitterId");
const secondStepForm = document.querySelector(".second-step-form");
const step1Data = {};

checkData();

function checkData() {
  try {
    const step1Data = JSON.parse(localStorage.getItem("step1"));

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
  headers.append("Content-Type", "application/json");

  fetch("http://localhost:3000/api/service/", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      categorySelected: step1Data.categorySelected,
      citySelected: step1Data.citySelected,
      productDescription: step1Data.productDescription,
      productName: step1Data.productName,
      typeOfProduct: step1Data.typeOfProduct,
      contactNumber: contactNumber.value,
      uploadPhoto: uploadPhoto.value,
      facebookId: facebookId.value,
      instagramId: instagramId.value,
      twitterId: twitterId.value,
    }),
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
