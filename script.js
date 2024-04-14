// fixed navbar

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    header.classList[window.scrollY > 50 ? "add" : "remove"]("header_active");
})
// responsive navbar for small screen 
var navbar = document.querySelector(".navbar");
var menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active")
})




var account = document.querySelector(".user-account");
var userBtn = document.querySelector("#user-btn");
var closeBtn = document.querySelector("#close-account");
userBtn.addEventListener("click", () => {
    account.classList.add("active")
})
closeBtn.addEventListener("click", () => {
    account.classList.remove("active")
})




var Orders = document.querySelector(".my-orders");
var orderBtn = document.querySelector("#order-btn");
var Order_closeBtn = document.querySelector(".my-orders #close-account");
orderBtn.addEventListener("click", () => {
    Orders.classList.add("active")
})
Order_closeBtn.addEventListener("click", () => {
    Orders.classList.remove("active")
})





var Cart = document.querySelector(".shopping-cart    ");
var cartBtn = document.querySelector("#cart-btn");
var closeCart_Btn = document.querySelector("#close-cart");
cartBtn.addEventListener("click", () => {
    Cart.classList.add("active")
})
closeCart_Btn.addEventListener("click", () => {
    Cart.classList.remove("active")
})

//  slides editing 

let slides = document.querySelectorAll(".home-bg .home .slide-container .slide");
let index = 0;
function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    console.log(index);
    slides[index].classList.add("active")
}
function prev() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    console.log(index);
    slides[index].classList.add("active")
}




// .faq .accordion-container .accordion.active .accordion-heading {
var accordion = document.querySelectorAll(".faq .accordion-container .accordion")
accordion.forEach(acc => {
    acc.onclick = () => {
        accordion.forEach(remove => remove.classList.remove('active'))
        acc.classList.add("active")
    }
})

// scroll to top btn




// // AOS Animation
// AOS.init({
//     duration: 1200,
// })
