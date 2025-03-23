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





var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-container"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animations/location.json",
});

animation.setSpeed(1);

