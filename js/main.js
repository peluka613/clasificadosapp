function listeners() {
  const logoutButton = document.querySelector("#exit-button");

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("user");
    window.location.href = "login.html";
  });
}

function getUserData() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const userNameTitle = document.querySelector("#name-user");
      userNameTitle.innerHTML = user.nombre_completo;
    }
  } catch (error) {
    console.log(error);
  }
}

listeners();
getUserData();
