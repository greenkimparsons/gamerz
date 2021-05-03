$(document).ready(function () {
  const radioButtons = document.querySelectorAll('input[name="platform"]');

  const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    let chosen_platform;

    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        chosen_platform = radioButtons[i].value;
      }
    }

    if (name && email && password && chosen_platform) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ name, email, password, chosen_platform }),
        headers: {"Content-Type": "application/json"}
      });

      // console.log(JSON.stringify({ name, email, password, chosen_platform }))

     

      if (response.ok) {
        document.location.replace("/");
      } else {
        console.log(response.statusText);
      }
    }
  };

  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);

  document
    .querySelector(".signup-form")
    .addEventListener("submit", signupFormHandler);
});
