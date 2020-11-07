const contactNumber = document.querySelector('#contactNumber');
const facadeButton = document.querySelector('#facadeButton');
const fileButton = document.querySelector('#fileButton');
const publishButton = document.querySelector('#publishButton');
const uploadPhoto = document.querySelector('#uploadPhoto');

publishButton.setAttribute('disabled', true);

addListeners();

/**
 * Add listeners
 */
function addListeners() {
    contactNumber.addEventListener('keyup', validateParams);
    facadeButton.addEventListener('click', openPhotoDialogBox);
    fileButton.addEventListener('change', onFilenameChanges);
    fileButton.addEventListener('change', validateParams);
}

/**
 * Opens dialog box
 */
function openPhotoDialogBox() {
    fileButton.click();
}

/**
 * Actions executed after loading the image file
 */
function onFilenameChanges () {
    uploadPhoto.value = fileButton.value.replace(/^.*\\/, "");
}

/**
 * Validate params before sending them
 */
function validateParams() {
    if (uploadPhoto.value && contactNumber.value) {
        publishButton.removeAttribute('disabled');
    } else {
        publishButton.setAttribute('disabled', true);
    }
}