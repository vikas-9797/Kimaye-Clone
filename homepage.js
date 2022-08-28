import  {navbar, footer } from "./componants/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("footer").innerHTML = footer();


// let c1 = document.getElementById("cart");
// c1.addEventListener('onclick', redirect_cart());

// function redirect_cart(){
//     window.location.href = 'cart.html';
// }

document.querySelector("#cart").addEventListener('click', () => {
    window.location.href = 'cart.html';
})


document.querySelector("#profile").addEventListener('click', () => {
    window.location.href = 'login.html';
    // console.log('fagh');
})


document.querySelector('#btn1').addEventListener('click', () => {
    window.location.href = 'all fruits.html';
})

document.querySelector('#btn2').addEventListener('click', () => {
    window.location.href = 'all veggies.html';
})

document.querySelector('#btn3').addEventListener('click', () => {
    window.location.href = 'fresh cut.html';
})

document.querySelector('#btn4').addEventListener('click', () => {
    window.location.href = 'gift.html';
})