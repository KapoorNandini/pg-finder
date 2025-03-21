// Initialize Particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 5 },
        line_linked: { enable: true, opacity: 0.5 }
    }
});


document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "toggle-form") {
        e.preventDefault();
        let title = document.getElementById("form-title");
        let button = document.querySelector(".btn");
        let toggleText = document.querySelector(".toggle-text");

        if (title.innerText === "Login") {
            title.innerText = "Sign Up";
            button.innerText = "Sign Up";
            toggleText.innerHTML = `Already have an account? <a href="#" id="toggle-form">Login</a>`;
        } else {
            title.innerText = "Login";
            button.innerText = "Login";
            toggleText.innerHTML = `Don't have an account? <a href="#" id="toggle-form">Sign Up</a>`;
        }
    }
});

document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevents form submission (if applicable)
    window.location.href = "index.html"; // Redirect to your homepage
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("login-btn").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission
        localStorage.setItem("isLoggedIn", "true"); // Save login state
        window.location.href = "index.html"; // Redirect to homepage
    });
});


var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-container"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animations/location.json",
});

animation.setSpeed(0.7);

