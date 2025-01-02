function setupSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    const sliderContainer = slider.querySelector('.trendsSlider-container');
    const slides = slider.querySelectorAll('.trendsSlide');
    const prev = slider.querySelector('.prev');
    const next = slider.querySelector('.next');

    let index = 0;

    function showSlide(i) {
        index = (i + slides.length) % slides.length;
        sliderContainer.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener('click', () => showSlide(index - 1));
    next.addEventListener('click', () => showSlide(index + 1));
}

setupSlider('trendsSlider1');
setupSlider('trendsSlider2');
setupSlider('trendsSlider3');

window.scrollTo(0, window.scrollY);
document.body.style.overflowX = "hidden";
