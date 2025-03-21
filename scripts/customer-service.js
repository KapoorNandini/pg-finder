document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll("details");

    faqItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Close other open FAQs when a new one is clicked
            faqItems.forEach((faq) => {
                if (faq !== item) {
                    faq.removeAttribute("open");
                }
            });
        });
    });
});
