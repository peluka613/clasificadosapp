const getProductAPIURL =
  "http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com:4001/api/search";

/**
 * Retrieve the product data
 */
function getProduct(id) {
  toggleSpinner(true);
  fetch(`${getProductAPIURL}/${id}`)
    .then((response) => response.json())
    .then((products) => {
      const productSection = document.getElementById("product-section");

      productSection.style.display = "block";
      renderProduct(products[0]);
      toggleSpinner(false);
    });
}

/**
 * Render the product data
 */
function renderProduct(product) {
  const productTitle = document.getElementById("product-title");
  const productImage = document.getElementById("product-image");
  const productDescription = document.getElementById("product-description");
  const itemsWrapper = document.getElementById("items-wrapper");
  const whatsappButton = document.getElementById("whatsapp-button");
  let itemsHtml = "";

  productTitle.innerHTML = product.NOMBRE;
  productImage.setAttribute("src", product.FOTO);
  productDescription.innerHTML = product.DESCRIPCION;

  if (product.DIRECCION) {
    itemsHtml += `
    <div class="flex-container">
      <div class="logo-wrapper">
        <img class="logo-image" src="./img/location.svg" alt="Location logo">
      </div>
      <div class="text-wrapper">
        <span>${product.DIRECCION}</span>
      </div>
    </div>
    `;
  }

  if (product.CELULAR) {
    itemsHtml += `
    <div class="flex-container">
      <div class="logo-wrapper">
        <img class="logo-image" src="./img/phone.svg" alt="Phone logo">
      </div>
      <div class="text-wrapper">
        <span>${product.CELULAR}</span>
      </div>
    </div>
    `;
  }

  if (product.CORREO) {
    itemsHtml += `
    <div class="flex-container">
      <div class="logo-wrapper">
        <img class="logo-image" src="./img/email.svg" alt="Email logo">
      </div>
      <div class="text-wrapper">
        <span>${product.CORREO}</span>
      </div>
    </div>
    `;
  }

  if (product.FACEBOOK) {
    itemsHtml += `
    <div class="flex-container">
      <div class="logo-wrapper">
        <img class="logo-image" src="./img/facebook.svg" alt="Facebook logo">
      </div>
      <div class="text-wrapper">
        <span>${product.FACEBOOK}</span>
      </div>
    </div>
    `;
  }

  itemsWrapper.innerHTML = itemsHtml;
  whatsappButton.setAttribute("phone", product.CELULAR);
}

/**
 * Open whatsapp app
 */
function goToWhatsapp(element) {
  const number = element.getAttribute("phone");

  window.location.replace("https://wa.me/" + "57" + number);
}

/**
 * Get the id of the product and check if exist get the product data
 */
function init() {
  const productId = window.location.search.split("?id=")[1];

  if (productId) {
    getProduct(productId);
  } else {
    window.location.replace("landing.html");
  }
}

init();
