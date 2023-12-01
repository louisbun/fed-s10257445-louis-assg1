    // JavaScript for the image slider
    let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    function showSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        const transformValue = -100 * currentIndex + '%';
        slides.style.transform = 'translateX(' + transformValue + ')';
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }


    setInterval(nextSlide, 3000); // Change slide every 3 seconds