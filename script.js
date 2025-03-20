window.addEventListener("scroll", function () {
    document.querySelector(".navbar").style.position = "sticky";
});


document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".custom-dropdown");
    const selected = document.querySelector(".dropdown-selected span");
    const arrow = document.querySelector(".dropdown-arrow");
    const menu = document.querySelector(".dropdown-menu");

    // Open and close dropdown on click
    dropdown.addEventListener("click", function () {
        dropdown.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove("active");
        }
    });



    

    // Handle item selection
    document.querySelectorAll(".dropdown-menu li").forEach(item => {
        item.addEventListener("click", function () {
            selected.textContent = this.textContent; // Update displayed text
            dropdown.classList.remove("active"); // Close dropdown
        });
    });
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


// Update price range dynamically
document.getElementById("priceRange").addEventListener("input", function() {
    document.getElementById("priceValue").innerText = "₹" + this.value;
});


const filterPanel = document.getElementById("filterPanel");
// const openFilter = document.getElementById("openFilter");
const filterButton = document.querySelector(".filter-button");
const closeFilter = document.getElementById("closeFilter");


// Open filter panel
// openFilter.addEventListener("click", () => {
//     filterPanel.style.right = "0";
// });
filterButton.addEventListener("click", () => {
    filterPanel.style.right = "0";
});

// Close filter panel
closeFilter.addEventListener("click", () => {
    filterPanel.style.right = "-350px";
});




document.addEventListener("DOMContentLoaded", function () {
    const filterPanel = document.querySelector(".filter-panel");
    const closeBtn = document.querySelector(".close-btn");
    let lastScrollTop = 0;

    // Function to close the filter panel
    function closeFilterPanel() {
        filterPanel.style.right = "-350px"; // Hide the panel
    }

    // Close filter when scrolling down
    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            closeFilterPanel();
        }
        lastScrollTop = currentScroll;
    });

    document.addEventListener("click", function (event) {
        if (!filterPanel.contains(event.target) && !filterButton.contains(event.target)) {
            closeFilterPanel();
        }
    });

    // Close button click event
    closeBtn.addEventListener("click", closeFilterPanel);
});


