function init() {
  getProducts();
}

async function getProducts() {
  toggleSpinner(true);

  try {
    const response = await fetch('http://localhost:3000/api/search/3', { method: 'GET'});
    const products = await response.json();

    setTimeout(() => {
      toggleSpinner(false);
      renderProducts(products);
    }, 2000);
  } catch (error) {
    console.log(error);
    toggleAlert(true);
  }

  // fetch('http://localhost:3000/api/search/3', { method: 'GET'})
  //   .then(response => response.json())
  //   .then(products => {
  //     setTimeout(() => {
  //       toggleSpinner(false);
  //       renderProducts(products);
  //     }, 2000)
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     toggleAlert(true);
  //   });
}

function renderProducts(products) {
  let productsHtml = '';
  const productWrapper = document.getElementById('products-wrapper');

  // for (let i=0; i<products.length; i++) {
  //   productsHtml += `
  //     <div class="product-card">
  //       <img src="img/${products[i].FOTO}" alt="imagen producto">
  //       <div class="product-card-text-container">
  //         <h4>${products[i].NOMBRE}</h4>
  //         <p>${products[i].DESCRIPCION}</p>
  //       </div>
  //     </div>
  //   `;
  // }

  products.forEach(product => {
    const html = `
    <div class="product-card">
      <img src="img/${product.FOTO}" alt="imagen producto">
      <div class="product-card-text-container">
        <h4>${product.NOMBRE}</h4>
        <p>${product.DESCRIPCION}</p>
      </div>
    </div>
    `;

    const productElement = document.createElement('div');

    productElement.innerHTML = html;
    productWrapper.appendChild(productElement);
  });

  // productWrapper.innerHTML = productsHtml;
}

function toggleSpinner(show) {
  const spinner = document.getElementById('spinner');

  spinner.style.display = show ? 'block' : 'none';
}

function toggleAlert(show) {
  const alert = document.getElementById('alert');

  alert.style.display = show ? 'block' : 'none';
}

init();