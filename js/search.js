/**
 * Add listener to the search form
 */
function addSubmitListeners() {
  const searchForm = document.querySelector(".search-form");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const categorySelected = document.querySelector('#categoriesWrapper .selected');
    const citySelected = document.querySelector('#citiesWrapper .selected');

    if (categorySelected && citySelected) {
      const categoryId = categorySelected.getAttribute('data-id');
      const cityId = citySelected.getAttribute('data-id');
      window.location.href = `results.html?category=${categoryId}&city=${cityId}`;
    }
  });
}

/**
 * Get the data for the dropdowns
 */
function init() {
  getCategories();
  getLocations();
  addSubmitListeners();
}

init();
