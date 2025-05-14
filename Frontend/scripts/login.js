document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("login-container");
    const signupContainer = document.getElementById("signup-container");

    const showSignup = document.getElementById("show-signup");
    const showLogin = document.getElementById("show-login");

    // Toggle logic
    showSignup?.addEventListener("click", (e) => {
        e.preventDefault();
        loginContainer.classList.add("hidden");
        signupContainer.classList.remove("hidden");
    });

    showLogin?.addEventListener("click", (e) => {
        e.preventDefault();
        signupContainer.classList.add("hidden");
        loginContainer.classList.remove("hidden");
    });

    // Signup form submission
    const signupForm = document.querySelector("#signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("signupEmail").value.trim();
            const password = document.getElementById("signupPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            try {
                const res = await fetch("http://localhost:5000/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ firstName, lastName, email, password }),
                });

                const data = await res.json();
                if (res.status === 201) {
                    alert("Signup successful! Please login.");
                    showLogin?.click(); // auto-switch to login tab
                } else {
                    alert(`Signup failed: ${data.message || "Try again"}`);
                }
            } catch (err) {
                console.error("Signup Error:", err);
                alert("Something went wrong. Try again.");
            }
        });
    }

    // Login form submission
    const loginForm = document.querySelector("#login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", async (event) => {
            event.preventDefault();
    
            const email = document.getElementById("login-email").value.trim();
            const password = document.getElementById("login-password").value;
    
            const errorMsg = document.getElementById("error-msg");
    
            if (!email || !password) {
                if (errorMsg) {
                    errorMsg.textContent = "Please enter both email and password.";
                }
                return;
            }
    
            try {
                const response = await fetch("http://localhost:5000/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password }),
                });
    
                const data = await response.json();
                console.log("Login response:", data); // Add this for debugging
    
                if (response.ok && data.token) {
                    localStorage.setItem("token", data.token);
                    window.location.href = "dashboard.html";
                } else {
                    if (errorMsg) {
                        errorMsg.textContent = data.message || "Login failed. Please try again.";
                    }
                }
            } catch (err) {
                console.error("Login Error:", err);
                if (errorMsg) {
                    errorMsg.textContent = "An error occurred. Please try again later.";
                }
            }
        });
    }

    // Lottie animation
    lottie.loadAnimation({
        container: document.getElementById("lottie-container"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "animations/location.json",
    }).setSpeed(1);
});
