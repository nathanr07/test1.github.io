console.log("JavaScript file loaded");

document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach((slider) => {
        let currentIndex = 0;
        const slides = slider.querySelectorAll('.slides img'); 
        const prevButton = slider.querySelector('.prev'); 
        const nextButton = slider.querySelector('.next'); 
        let autoSlideInterval;
        const autoSlideDelay = 7000;  // 
        const userInteractionDelay = 10000;  

        function showSlide(index) {
            if (index >= slides.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slides.length - 1;
            } else {
                currentIndex = index;
            }

            const newTranslateValue = -currentIndex * 100;
            slider.querySelector('.slides').style.transform = `translateX(${newTranslateValue}%)`; 
        }

        function changeSlide(direction) {
            const newIndex = currentIndex + direction;
            showSlide(newIndex);
            resetAutoSlide();
        }

        function startAutoSlide() {
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(() => {
                showSlide(currentIndex + 1);
            }, autoSlideDelay);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            setTimeout(() => {
                startAutoSlide();
            }, userInteractionDelay);
        }

        prevButton.addEventListener('click', () => changeSlide(-1));
        nextButton.addEventListener('click', () => changeSlide(1));

        showSlide(currentIndex);
        startAutoSlide();
    });
});
