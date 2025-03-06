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
