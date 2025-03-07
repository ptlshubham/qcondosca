function updateCarouselImages() {
    let slides = document.querySelectorAll('.owl-item');

    slides.forEach((slide, index) => {
        let imagePath = '';

        if (window.innerWidth <= 767) {
            // Mobile images with BUILDING X-mobile-view.jpg naming convention
            imagePath = `img/slides/BUILDING ${index + 1}-mobile-view.jpg`;
        } else {
            // PC images with 1.jpg, 2.jpg naming convention
            imagePath = `img/slides/${index + 1}.jpg`;
        }

        slide.style.backgroundImage = `url('${imagePath}')`;
    });
}

// Run on load and resize
window.addEventListener("load", updateCarouselImages);
window.addEventListener("resize", updateCarouselImages);


// model
/// Carousel image update function
// Carousel image update function
function updateCarouselImages() {
    let slides = document.querySelectorAll('.owl-item');

    slides.forEach((slide, index) => {
        let imagePath = '';

        if (window.innerWidth <= 767) {
            // Mobile images with BUILDING X-mobile-view.jpg naming convention
            imagePath = `img/slides/BUILDING ${index + 1}-mobile-view.jpg`;
        } else {
            // PC images with 1.jpg, 2.jpg naming convention
            imagePath = `img/slides/${index + 1}.jpg`;
        }

        slide.style.backgroundImage = `url('${imagePath}')`;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // Bootstrap Modal instance with backdrop enabled
    var aboutUsModal = new bootstrap.Modal(document.getElementById('aboutUsModal'), {
        backdrop: true, // Enable backdrop to dim the background
        keyboard: true  // Allow closing with ESC key
    });

    // Show modal immediately on page load
    aboutUsModal.show();

    // Flag to track if modal has been closed (affects persistence behavior)
    var isModalClosed = false;

    // Open modal when Home nav link is clicked (always show, even if previously closed)
    var homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener('click', function (e) {
        setTimeout(function () {
            aboutUsModal.show(); // Always show modal on Home click
            isModalClosed = false; // Reset flag so it persists again until closed
        }, 500); // Delay to allow scrolling animation to complete
    });

    // Close modal on form submission only if all required fields are filled
    var contactForm = document.querySelector('#aboutUsModal .contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission for testing

        // Check if the form is valid (all required fields filled)
        if (contactForm.checkValidity()) {
            // Simulate successful submission
            setTimeout(function () {
                aboutUsModal.hide(); // Close the modal
                isModalClosed = true; // Prevent reopening except via Home click
            }, 500); // Optional delay to simulate processing
        } else {
            // Trigger browser validation UI if form is invalid
            contactForm.reportValidity(); // Shows validation messages, keeps modal open
        }
    });

    // Set flag when modal is closed manually (affects persistence behavior)
    document.getElementById('aboutUsModal').addEventListener('hidden.bs.modal', function () {
        isModalClosed = true; // Modal won’t reopen automatically unless Home is clicked
    });

    // Run carousel update on load
    updateCarouselImages();
});

// Run carousel update on resize
window.addEventListener("resize", updateCarouselImages);