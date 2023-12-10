const loginForm = document.getElementById("login-card-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "nikhil" && password === "preetu1432") {
        alert("You have successfully logged in.");
        location.href = "https://celadon-palmier-c88850.netlify.app/";
        
    } 
    else if (username === "preetu" && password === "preetu1432") {
        
        alert("You have successfully logged in.");
        location.href = "https://celadon-palmier-c88850.netlify.app/";
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})