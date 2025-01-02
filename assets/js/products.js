const productsBtn = document.querySelectorAll('.main-button');
const items = document.querySelectorAll('.item');
const cartMsg = document.querySelector('.cartMsg');
localStorage.setItem('localNum', 0);

productsBtn.forEach(product => {
  product.addEventListener('click', () => {
    localStorage.setItem('localNum', parseInt(localStorage.getItem('localNum')) + 1);
    const productData = {
    proName: product.parentElement.querySelector(".proName").textContent,    
    price: product.parentElement.getAttribute('price'),
    img:product.parentElement.querySelector("img").src,
    };
    localStorage.setItem(`cart${localStorage.getItem("localNum")}`, JSON.stringify(productData));
    cartMsg.style.top="100px";
    setTimeout(function(){
        cartMsg.style.top="-300px";
    }, 2000);
  });
});

