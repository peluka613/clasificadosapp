function listeners() {
  const logoutButton = document.querySelector("#exit-button");

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "login.html";
  });
}

listeners();
