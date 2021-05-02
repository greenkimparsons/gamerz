$(document).ready(function(){

const radioButtons = document.querySelectorAll('input[name="platform"]');

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    // const response = await fetch("/api/users/login", {
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    //   headers: { "Content-Type": "application/json" },
    // });

    // if (response.ok) {
    //   // If successful, redirect the browser to the profile page
    //   document.location.replace("/");
    // } else {
    //   alert(response.statusText);
    // }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  let chosenPlatform;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      chosenPlatform = radioButtons[i].value;
    }
  }

  console.log(chosenPlatform);

  if (name && email && password && chosenPlatform) {
  
    $.ajax("/api/users",{
      type: "POST",
      data: {name, email, password, chosenPlatform}
    })
    .then((response)=>{console.log(response)})
    // const response = await fetch("/api/users", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, password, chosenPlatform }),
      
    // });

    // console.log('response', response)

    // if (response.ok) {
    //   document.location.replace("/");
    // } else {
    //   alert(response.statusText);
    // }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

})