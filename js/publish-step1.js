const locationsSelector = document.querySelector('#locationsWrapper');
const nextButton = document.querySelector('#next');
const productDescription = document.querySelector('#productDescription');
const productName = document.querySelector('#productName');
const typesSelector = document.querySelector('#typesWrapper');

nextButton.setAttribute('disabled', true);

getInfo();
addListeners();

/**
 * Add listeners
 */
function addListeners() {
    document.querySelectorAll('.custom-select-wrapper').forEach(item => {
        item.addEventListener('click', openSelector);
    });

    document.querySelectorAll('.custom-option').forEach(option => {
        option.addEventListener('click', setSelectedOption);
    });

    productDescription.addEventListener('keyup', productDescriptionHandler);
    productDescription.addEventListener('keyup', validateParams);
    productName.addEventListener('keyup', validateParams);
    typesSelector.addEventListener('click', validateParams);
    locationsSelector.addEventListener('click', validateParams);
}

/**
 * Validate params before sending them
 */
function validateParams() {
    const nextButton = document.querySelector('#next');
    const selectedLocation = locationsSelector.getElementsByClassName('selected');
    const selectedType = typesSelector.getElementsByClassName('selected');
    let selectedLocationValue;
    let selectedTypeValue;

    if (selectedType[0]) {
        selectedTypeValue = selectedType[0].innerHTML
    }

    if (selectedLocation[0]) {
        selectedLocationValue = selectedLocation[0].innerHTML
    }

    if (productDescription.value && productName.value && selectedTypeValue && selectedLocationValue) {
        nextButton.removeAttribute('disabled');
    } else {
        nextButton.setAttribute('disabled', true);
    }
}

/**
 * Handle typing event
 */
function productDescriptionHandler() {
    const charCounter = document.querySelector('.char-counter');

    charCounter.textContent = `${productDescription.value.length} / 300`;
}

/**
 * Open list of items
 */
function openSelector() {
    this.querySelector('.custom-select').classList.toggle('open');
}

/**
 * Sets option chosen by the user
 */
function setSelectedOption() {
    const optionSelected = this.parentNode.querySelector('.custom-option.selected');

    if (!this.classList.contains('selected') && optionSelected) {
        optionSelected.classList.remove('selected');
    }

    this.classList.add('selected');
    this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
}

/**
 * Render type of products or services
 */
function renderListItems(items, section) {
    let itemsHtml = '';
    const itemsWrapper = document.getElementById(section);

    items.forEach(item => {
    itemsHtml += `
        <span class="custom-option">${item.NOMBRE}</span>
    `;
  });

  itemsWrapper.innerHTML = itemsHtml;
}

/**
 * Render page info
 */
async function getInfo() {
  try {
    // const response = await fetch('', { method: 'GET'});
    // const items = await response.json();

    const types = [
        {
            NOMBRE: 'tipo 1'
        },
        {
            NOMBRE: 'tipo 2'
        }
    ];

    const locations = [
        {
            NOMBRE: 'location 1'
        },
        {
            NOMBRE: 'location 2'
        }
    ];

    renderListItems(types, 'typesWrapper');
    renderListItems(locations, 'locationsWrapper');
  } catch {
  }
}
