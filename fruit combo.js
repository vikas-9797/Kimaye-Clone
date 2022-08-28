import  {navbar, footer } from "./componants/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("footer").innerHTML = footer();

var bonusData = [
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Cherry--_-blueberry_360x.jpg?v=1654851019",name:"Northvest Cherries-Blueberry Combo",price:"654",},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Plum_BB_360x.jpg?v=1621068661",name:"Kimaye Plum-Blueberries Combo",price:"356",},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Wholesome-combo_360x.jpg?v=1618497683",name:"Kimaye Wholesome Combo",price:"733"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/KiwiBlueberry_360x.png?v=1617983685",name:"Kimaye Kivi-Blueberries Combo",price:"412"},
    
]

displayfun(bonusData)
//var arrObj = JSON.parse(localStorage.getItem("cart")) || [];
var cartArr=[]
function displayfun(data){



//var res=document.getElementById("bonus-deals")
data.forEach(function(elem){
    var box=document.createElement("div")

    var img = document.createElement("img");
    img.src = elem.image;

    var name = document.createElement("h4");
    name.setAttribute("id","namee");
    name.innerText=elem.name;

    var price = document.createElement("h1");
    price.setAttribute("id","price");
    price.innerText=elem.price;

    
    var btnn = document.createElement("button");
    btnn.innerText="Add To Cart";
    btnn.addEventListener("click",function(){
        //mufunction(elem);
        addCart(elem)
       // arrObj.push(bonusData)
       // localStorage.setItem("cart",JSON.stringify(arrObj))
        //console.log(bonusData)
    });
    box.append(img,name,price,btnn)
    document.querySelector("#bonus-deals").append(box)
});
}
function addCart(elem){
    cartArr.push(elem)
    localStorage.setItem("cart",JSON.stringify(cartArr))
    alert("Product Added To Cart")

}
//displayfun(bonusData)