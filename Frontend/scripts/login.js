// Initialize Particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 5 },
        line_linked: { enable: true, opacity: 0.5 }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("login-container");
    const signupContainer = document.getElementById("signup-container");
    const showSignup = document.getElementById("show-signup");
    const showLogin = document.getElementById("show-login");

    // Show Sign-Up Form & Hide Login Form
    showSignup.addEventListener("click", function () {
        loginContainer.classList.add("hidden");
        signupContainer.classList.remove("hidden");
    });

    // Show Login Form & Hide Sign-Up Form
    showLogin.addEventListener("click", function () {
        signupContainer.classList.add("hidden");
        loginContainer.classList.remove("hidden");
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const passwordStrengthMsg = document.getElementById("password-strength");
    const passwordMatchMsg = document.getElementById("password-match");
    const submitBtn = document.getElementById("submit-btn");

    // Password Strength Check
    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;
        if (password.length < 6) {
            passwordStrengthMsg.textContent = "Weak ❌";
            passwordStrengthMsg.style.color = "red";
        } else if (password.length < 10) {
            passwordStrengthMsg.textContent = "Medium ⚠️";
            passwordStrengthMsg.style.color = "orange";
        } else {
            passwordStrengthMsg.textContent = "Strong ✅";
            passwordStrengthMsg.style.color = "green";
        }
    });

    // Confirm Password Check
    confirmPasswordInput.addEventListener("input", function () {
        if (confirmPasswordInput.value === passwordInput.value) {
            passwordMatchMsg.textContent = "Passwords Match ✅";
            passwordMatchMsg.style.color = "green";
        } else {
            passwordMatchMsg.textContent = "Passwords Do Not Match ❌";
            passwordMatchMsg.style.color = "red";
        }
    });

    // Prevent Form Submission if Passwords Don't Match
    submitBtn.addEventListener("click", function (event) {
        if (confirmPasswordInput.value !== passwordInput.value) {
            event.preventDefault(); // Stops the form from submitting
            alert("Passwords do not match! Please enter the same password.");
        }
    });
});

var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-container"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animations/location.json",
});

animation.setSpeed(1);

