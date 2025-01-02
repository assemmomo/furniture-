
window.addEventListener('load', function () {
    for (let i = 0; i < 10; i++) {
        if (localStorage.getItem(`cart${i}`)) {
            document.querySelector(".nextBtn").style.opacity = "1";
            document.querySelector(".orderNone").classList.remove("d-flex");
            document.querySelector(".orderNone").style.display = "none";
            const cartData = JSON.parse(localStorage.getItem(`cart${i}`));
            document.querySelector(".ordersHolder").innerHTML += `<div class="order">
            <div>
            <i class="fa-solid fa-x delete"></i>
            <img src="${JSON.parse(localStorage.getItem(`cart${i}`)).img}" alt="">
            <h2>${JSON.parse(localStorage.getItem(`cart${i}`)).proName}</h2>
            </div>
            
            <div class="justify-content-between">
            <h3 class="fs-5 productPrice">${JSON.parse(localStorage.getItem(`cart${i}`)).price}</h3>
            <input class="text-center orderIp" type="number" value="1">
            <h3 class="fs-5 orderTotal">${cartData.price}$</h3>
            </div>
            </div>`
            const orders = document.querySelectorAll('.order');
            const deleteBtn = document.querySelectorAll('.delete');
            const orderTotal = document.querySelectorAll('.orderTotal');
            const orderIp = document.querySelectorAll('.orderIp');
            const productPrice = document.querySelectorAll('.productPrice');


            deleteBtn.forEach(function (e) {
                e.addEventListener('click', function () {
                    e.parentElement.parentElement.remove();
                    localStorage.removeItem(`cart${i}`);
                    window.location.reload();
                })
            })

            orderIp.forEach(function (e) {
                e.addEventListener('input', function () {
                    e.parentElement.querySelector(".orderTotal").innerHTML = parseInt((e.parentElement.querySelector(".productPrice").innerHTML) * (e.value)) + "$";
                    updateTotal();
                })
            })
        }

    }
    function updateTotal() {
        const totalNum = document.querySelector('.totalNum');
        const orderTotal = document.querySelectorAll('.orderTotal');
        let totalSum = 0;
        orderTotal.forEach(function (e) {
            totalSum += parseFloat(e.innerHTML);
        });
        totalNum.innerHTML = totalSum + "$";
    }
    updateTotal();
});

const payType = document.querySelectorAll('.payType');




setInterval(function () {
    if (document.querySelector(".nextBtn").style.opacity == "1") {
        document.querySelector(".nextBtn").onclick = function () {
            if (document.querySelector(".firstOrderPage").classList.contains("orderPageAcitve")) {
                document.querySelector(".firstOrderPage").classList.remove("orderPageAcitve");
                document.querySelector(".firstOrderPage").classList.add("d-none");
                document.querySelector(".secondOrderPage").classList.add("orderPageAcitve");
                document.querySelector(".orderNavOne").classList.remove("orderNavActive");
                document.querySelector(".orderNavTwo").classList.add("orderNavActive");
                document.querySelector(".PreviousBtn").style.opacity = "1";
                document.querySelector(".secondOrderPage").classList.remove("d-none");


            } else if (document.querySelector(".secondOrderPage").classList.contains("orderPageAcitve")) {
                document.querySelector(".secondOrderPage").classList.remove("orderPageAcitve");
                document.querySelector(".secondOrderPage").classList.add("d-none");
                document.querySelector(".thirdOrderPage").classList.add("orderPageAcitve");
                document.querySelector(".orderNavOne").classList.remove("orderNavActive");
                document.querySelector(".orderNavTwo").classList.remove("orderNavActive");
                document.querySelector(".orderNavThree").classList.add("orderNavActive");
                document.querySelector(".PreviousBtn").style.opacity = "1";
                document.querySelector(".thirdOrderPage").classList.remove("d-none");
            }
        }
    }
}, 100)
setInterval(function () {
    if (document.querySelector(".PreviousBtn").style.opacity == "1") {
        document.querySelector(".PreviousBtn").onclick = function () {
            if (document.querySelector(".secondOrderPage").classList.contains("orderPageAcitve")) {
                document.querySelector(".firstOrderPage").classList.add("orderPageAcitve");
                document.querySelector(".firstOrderPage").classList.remove("d-none");
                document.querySelector(".secondOrderPage").classList.remove("orderPageAcitve");
                document.querySelector(".orderNavOne").classList.add("orderNavActive");
                document.querySelector(".orderNavTwo").classList.remove("orderNavActive");
                document.querySelector(".PreviousBtn").style.opacity = "0.5";
                document.querySelector(".secondOrderPage").classList.add("d-none");
            } else if (document.querySelector(".thirdOrderPage").classList.contains("orderPageAcitve")) {
                document.querySelector(".secondOrderPage").classList.add("orderPageAcitve");
                document.querySelector(".secondOrderPage").classList.remove("d-none");
                document.querySelector(".thirdOrderPage").classList.remove("orderPageAcitve");
                document.querySelector(".orderNavOne").classList.remove("orderNavActive");
                document.querySelector(".orderNavTwo").classList.add("orderNavActive");
                document.querySelector(".orderNavThree").classList.remove("orderNavActive");
                document.querySelector(".thirdOrderPage").classList.add("d-none");
            }
        }
    }
    if (document.querySelector(".storeBtn").classList.contains("shippingActive")) {
        document.querySelector(".storeBtnActive").classList.add("d-flex");
        document.querySelector(".storeBtnActive").classList.remove("d-none");
        document.querySelector(".dBtnActive").classList.remove("d-flex");
        document.querySelector(".dBtnActive").classList.add("d-none");
    }
    if (document.querySelector(".dBtn").classList.contains("shippingActive")) {
        document.querySelector(".storeBtnActive").classList.remove("d-flex");
        document.querySelector(".storeBtnActive").classList.add("d-none");
        document.querySelector(".dBtnActive").classList.add("d-flex");
        document.querySelector(".dBtnActive").classList.remove("d-none");
    }
}, 100)

document.querySelector(".storeBtn").onclick = function () {
    document.querySelector(".storeBtn").classList.add("shippingActive");
    document.querySelector(".dBtn").classList.remove("shippingActive");
};
document.querySelector(".dBtn").onclick = function () {
    document.querySelector(".storeBtn").classList.remove("shippingActive");
    document.querySelector(".dBtn").classList.add("shippingActive");
};


payType.forEach(function (e) {
    e.addEventListener('click', function () {
        payType.forEach(function (e) {
            e.classList.remove("payActive");
        })
        e.classList.add("payActive");
    })
});

window.scrollTo(0, window.scrollY);
document.body.style.overflowX = "hidden";