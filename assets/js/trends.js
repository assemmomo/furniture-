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


const productsBtn = document.querySelectorAll('.productBtn');
const cartMsg = document.querySelector('.cartMsg');
localStorage.setItem('localNum2', 0);

productsBtn.forEach(product => {
    product.addEventListener('click', () => {
      localStorage.setItem('localNum2', parseInt(localStorage.getItem('localNum2')) + 1);
      const productData = {
      proName: product.parentElement.querySelector(".proName").textContent,    
      price: product.parentElement.getAttribute('price'),
      img:product.parentElement.querySelector("img").src,
      };
      localStorage.setItem(`2cart${localStorage.getItem("localNum2")}`, JSON.stringify(productData));
      cartMsg.style.top="100px";
      setTimeout(function(){
          cartMsg.style.top="-300px";
      }, 2000);
    });
  });





window.scrollTo(0, window.scrollY);
document.body.style.overflowX = "hidden";

