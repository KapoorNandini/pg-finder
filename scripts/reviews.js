document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("review-form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get user input
        const textarea = form.querySelector("textarea");
        const reviewText = textarea.value.trim();

        if (reviewText === "") {
            alert("Please write something before submitting.");
            return;
        }

        // Create new review element
        const reviewContainer = document.createElement("div");
        reviewContainer.classList.add("review");

        reviewContainer.innerHTML = `
            <h3>Anonymous</h3>
            <p>⭐ ${reviewText}</p>
        `;

        // Insert review into the page
        document.querySelector(".right-section").appendChild(reviewContainer);

        // Clear the textarea
        textarea.value = "";
    });
});
