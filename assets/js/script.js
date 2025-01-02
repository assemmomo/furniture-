const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn');
const mainSlider = document.querySelectorAll('.mainSlider');
const leftCBtn = document.querySelector(".leftCBtn");
const rightCBtn = document.querySelector(".rightCBtn");
const commentsSlider = document.querySelector('.commentsSlider');
const cSlide = document.querySelectorAll('.cSlide');

let currentIndex = 0;


function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 33.4}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % mainSlider.length;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + mainSlider.length) % mainSlider.length;
  updateSlider();
});


  // slider2 

let currentIndex2 = 0;

function updateCSlider() {
  cSlide.forEach(function(e){
    e.style.transform = `translateX(-${currentIndex2 * 123}%)`;
  })
}

rightCBtn.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 + 1) % cSlide.length;
  updateCSlider();
  if(currentIndex2==3){
    rightCBtn.style.display="none";
  }else if(currentIndex2<3){
    rightCBtn.style.display="block";
  }
});

leftCBtn.addEventListener('click', () => {
  currentIndex2 = (currentIndex2 - 1 + cSlide.length) % cSlide.length;
  updateCSlider();
  if(currentIndex2==3){
    rightCBtn.style.display="none";
  }else if(currentIndex2<3){
    rightCBtn.style.display="block";
  }
});


document.addEventListener('scroll', function() {
  const section = document.querySelector('.animate-left');
  const sectionPosition = section.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;
  
  if (sectionPosition < screenPosition) {
    document.querySelectorAll('.animate-left, .animate-right, .sec2Bg').forEach(element => {
      element.classList.add('visible');
    });
  }
});




// productsPage







window.scrollTo(0, window.scrollY);
document.body.style.overflowX = "hidden";