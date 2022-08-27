import  {navbar, footer } from "./componants/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("footer").innerHTML = footer();

var bonusData = [
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/47dfb7d1-d8d3-4c96-bda9-7dc85dfdec51_540x.png?v=1613364164",name:"Pomegranate Seeds (Axils Cup)125g",price:"55"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/24d0f9c9-fe83-40a3-84ab-300e73e4ff8d_540x.png?v=1611811511",name:"Coconut Chunks Cup (100g)",price:"130"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/0fce7fd6-f30e-45df-8c52-234acbd62023_540x.png?v=1611811509",name:"Grated Coconut Punnet",price:"51"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/62cef687-de59-4f5a-acf3-4df1238c3e29-min_540x.png?v=1614324446",name:"Kimaye Arils-Coco Cup (125g)",price:"140"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/47dfb7d1-d8d3-4c96-bda9-7dc85dfdec51_119283b1-bac0-4798-8af7-e4259a3a4b22_540x.jpg?v=1633861455",name:"Arils Festive Pack (Pack of 5 cups)",price:"₹260"},
    
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




