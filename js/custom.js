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

// Modal logic
document.addEventListener('DOMContentLoaded', function () {
    // Bootstrap Modal instance with backdrop enabled
    var aboutUsModal = new bootstrap.Modal(document.getElementById('aboutUsModal'), {
        backdrop: true, // Enable backdrop to dim the background
        keyboard: true
    });

    // Show modal immediately on page load
    aboutUsModal.show();

    // Flag to track if modal has been closed (for scroll behavior only)
    var isModalClosedForScroll = false;

    // Function to check if element is partially in viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;

        return (
            rect.top < windowHeight && // Top of element is above bottom of viewport
            rect.bottom > 0 &&        // Bottom of element is below top of viewport
            rect.left < windowWidth && // Left of element is before right of viewport
            rect.right > 0            // Right of element is after left of viewport
        );
    }

    // Get the Home section
    var homeSection = document.getElementById('home');

    // Handle scroll event for Home section
    window.addEventListener('scroll', function () {
        if (!isModalClosedForScroll && isElementInViewport(homeSection)) {
            aboutUsModal.show(); // Show modal when Home is in view, if not closed for scroll
        } else {
            aboutUsModal.hide(); // Hide modal when Home is out of view
        }
    });

    // Open modal when Home nav link is clicked (always show, even if closed)
    var homeLink = document.querySelector('a[href="#home"]');
    homeLink.addEventListener('click', function (e) {
        setTimeout(function () {
            aboutUsModal.show(); // Always show modal on click, regardless of closure state
        }, 500); // Delay to allow scrolling animation to complete
    });

    // Close modal on form submission only if all required fields are filled
    var contactForm = document.querySelector('#aboutUsModal .contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission for testing (remove if using server-side processing)

        // Check if the form is valid (all required fields filled)
        if (contactForm.checkValidity()) {
            // Simulate successful submission (replace with actual logic if needed)
            setTimeout(function () {
                aboutUsModal.hide(); // Close the modal only if form is valid
                isModalClosedForScroll = true; // Prevent reopening on scroll
            }, 500); // Optional delay to simulate processing; adjust or remove as needed
        } else {
            // Trigger browser validation UI if form is invalid
            contactForm.reportValidity(); // Shows validation messages, keeps modal open
        }

        // If using actual server-side submission, uncomment and adjust this:
        /*
        if (contactForm.checkValidity()) {
          fetch('php/contact-form.php', {
            method: 'POST',
            body: new FormData(contactForm)
          })
          .then(response => response.json()) // Assuming PHP returns JSON
          .then(data => {
            if (data.success) { // Adjust based on your PHP response
              aboutUsModal.hide();
              isModalClosedForScroll = true;
            }
          })
          .catch(error => console.error('Error:', error));
        } else {
          contactForm.reportValidity();
        }
        */
    });

    // Set flag when modal is closed manually (affects scroll behavior only)
    document.getElementById('aboutUsModal').addEventListener('hidden.bs.modal', function () {
        isModalClosedForScroll = true; // Prevent reopening on scroll until page refresh
    });

    // Run carousel update on load
    updateCarouselImages();
});

// Run carousel update on resize
window.addEventListener("resize", updateCarouselImages);