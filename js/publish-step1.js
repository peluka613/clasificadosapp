const productDescription = document.querySelector('#productDescription');

// Listens all selectors 'custom-select-wrapper'
document.querySelectorAll('.custom-select-wrapper').forEach(item => {
    item.addEventListener('click', openSelector);
});

for (const option of document.querySelectorAll('.custom-option')) {
    option.addEventListener('click', setSelectedOption)
}

// Listen typing on product description
productDescription.addEventListener('keyup', productDescriptionHandler);

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
