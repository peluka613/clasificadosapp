function loginUser() {
  toggleAlert(false, "");

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  fetch("http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com:4001/api/auth/", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      email: document.querySelector("#email").value,
      passwd: document.querySelector("#password").value,
    }),
  })
    .then((response) => response.json())
    .then((user) => {
      if (user.error) {
        toggleAlert(true, user.error);
      } else {
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "landing.html";
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function init() {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      window.location.href = "landing.html";
    }
  } catch (error) {
    console.log(error);
  }

  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    loginUser();
  });
}

function toggleAlert(show, message) {
  const alert = document.getElementById("alert");

  if (message) {
    alert.innerHTML = message;
  }

  alert.style.display = show ? "block" : "none";
}

init();
