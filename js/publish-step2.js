const fileButton = document.querySelector('#fileButton');
const facadeButton = document.querySelector('#facadeButton');
const publishButton = document.querySelector('#publishButton');
const uploadPhoto = document.querySelector('#uploadPhoto');

publishButton.setAttribute('disabled', true);

addListeners();

/**
 * Add listeners
 */
function addListeners() {
    facadeButton.addEventListener('click', openPhotoDialogBox);
    fileButton.addEventListener('change', onFilenameChanges);
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
    const file = fileButton.value;

    uploadPhoto.value = file;
}

/**
 * Validate params before sending them
 */
function validateParams() {

}