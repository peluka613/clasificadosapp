const authAPIURL =
  "http://ec2-18-220-72-102.us-east-2.compute.amazonaws.com:4001/api/auth/";

/**
 * Method to check the user credentials are valid
 */
function loginUser() {
  const headers = new Headers();

  toggleAlert(false, "");
  headers.append("Content-Type", "application/json");

  fetch(authAPIURL, {
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

/**
 * Method to show a error message when the credentials are invalid
 */
function toggleAlert(show, message) {
  const alert = document.getElementById("alert");

  if (message) {
    alert.innerHTML = message;
  }

  alert.style.display = show ? "block" : "none";
}

/**
 * Method check if the user is already logged in order to redirect to the landing page
 */
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

init();
