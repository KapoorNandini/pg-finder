window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 30px";
        navbar.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
    } else {
        navbar.style.padding = "15px 30px";
        navbar.style.boxShadow = "none";
    }
});

function nextSlide(button) {
    let slider = button.closest(".image-slider"); // Get correct slider
    let images = slider.querySelectorAll("img:not([alt*='Previous']):not([alt*='Next'])"); // Get images, ignore buttons
    let currentIndex = [...images].findIndex(img => img.classList.contains("active"));

    console.log("Current Index (Before Next):", currentIndex);

    images[currentIndex].classList.remove("active");

    let nextIndex = (currentIndex + 1) % images.length; // Ensures looping
    images[nextIndex].classList.add("active");

    console.log("Next Index (After Next):", nextIndex);
}

function prevSlide(button) {
    let slider = button.closest(".image-slider"); // Get correct slider
    let images = slider.querySelectorAll("img:not([alt*='Previous']):not([alt*='Next'])"); // Get images, ignore buttons
    let currentIndex = [...images].findIndex(img => img.classList.contains("active"));

    console.log("Current Index (Before Prev):", currentIndex);

    images[currentIndex].classList.remove("active");

    let prevIndex = (currentIndex - 1 + images.length) % images.length; // Ensures looping back
    images[prevIndex].classList.add("active");

    console.log("Previous Index (After Prev):", prevIndex);
}

document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll('.fade-in');

    function handleScroll() {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                element.classList.add('show');
            }
        });
    }

    // Run on scroll
    window.addEventListener("scroll", handleScroll);

    // Run once on page load
    handleScroll();
});


