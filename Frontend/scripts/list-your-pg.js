document.addEventListener("DOMContentLoaded", function () {
    const pgForm = document.getElementById("pgForm");

    pgForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission until validation is done

        let errors = [];

        // Get form values
        let pgName = pgForm["pg_name"].value.trim();
        let ownerName = pgForm["owner_name"].value.trim();
        let contact = pgForm["contact"].value.trim();
        let email = pgForm["email"].value.trim();
        let city = pgForm["city"].value;
        let address = pgForm["address"].value.trim();
        let rent = pgForm["rent"].value.trim();
        let deposit = pgForm["deposit"].value.trim();
        let pgType = document.querySelector('input[name="pg_type"]:checked');
        let facilities = document.querySelectorAll('input[name="facilities"]:checked');
        let images = pgForm["images"].files;

        // Validate PG Name
        if (pgName === "") {
            errors.push("PG Name is required.");
        }

        // Validate Owner Name
        if (ownerName === "") {
            errors.push("Owner Name is required.");
        }

        // Validate Contact Number (10-digit number)
        if (!/^\d{10}$/.test(contact)) {
            errors.push("Enter a valid 10-digit contact number.");
        }

        // Validate Email
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errors.push("Enter a valid email address.");
        }

        // Validate Address
        if (address === "") {
            errors.push("Full Address is required.");
        }

        // Validate PG Type Selection
        if (!pgType) {
            errors.push("Select a PG Type.");
        }

        // Validate Rent (should be a number)
        if (rent === "" || isNaN(rent) || rent <= 0) {
            errors.push("Enter a valid Monthly Rent.");
        }

        // Validate Security Deposit (Optional but should be a number)
        if (deposit !== "" && (isNaN(deposit) || deposit < 0)) {
            errors.push("Enter a valid Security Deposit.");
        }

        // Validate Image Upload (At least 1 image required)
        if (images.length === 0) {
            errors.push("Please upload at least one image of the PG.");
        }

        // Display Errors
        if (errors.length > 0) {
            alert(errors.join("\n")); // Show all errors in an alert
            return;
        }

        // If no errors, proceed with form submission
        alert("PG Listed Successfully! ✅");

        // You can send data to backend or store in localStorage
        let formData = {
            pgName,
            ownerName,
            contact,
            email,
            city,
            address,
            pgType: pgType.value,
            facilities: Array.from(facilities).map(f => f.value),
            rent,
            deposit,
        };

        console.log("PG Listing Data:", formData);
        localStorage.setItem("pgListing", JSON.stringify(formData));

        // Reset form
        pgForm.reset();
    });
});


document.querySelector('input[name="videos"]').addEventListener('change', function() {
    let maxSize = 50 * 1024 * 1024; // 50MB max size
    for (let file of this.files) {
        if (file.size > maxSize) {
            alert("Each video must be less than 50MB.");
            this.value = "";  // Clear selection
            break;
        }
    }
});


document.getElementById("imageUpload").addEventListener("change", function() {
    let fileName = this.files.length > 0 ? this.files[0].name : "No image chosen";
    document.getElementById("imageName").textContent = fileName;
});

document.getElementById("videoUpload").addEventListener("change", function() {
    let fileName = this.files.length > 0 ? this.files[0].name : "No video chosen";
    document.getElementById("videoName").textContent = fileName;
});
