import  {navbar, footer } from "./componants/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("footer").innerHTML = footer();

var bonusData = [
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Baby-Corn--Exoticcover_png_540x.jpg?v=1660302234",name:"Kimaye Baby Corn (125 g)",price:"34",},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/broccolicover_540x.jpg?v=1655881491",name:"Kimaye Broccoli",price:"135",},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Capsicumleadimage_540x.jpg?v=1660378877",name:"Kimaye Capsicum(Green) 1 pc",price:"42"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/RED-CAPSICUMcover_540x.jpg?v=1656589782",name:"Kimaye Capsicum(Red) 1 pc",price:"74"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Capsicum_yellow_cover_540x.jpg?v=1656566943",name:"Kimaye Capsicum(Yellow) 1 pc",price:"75"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Tomatocover_540x.jpg?v=1655883305",name:"Kimaye Cherry Tomato(Vine) 200 g",price:"72"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/KAlecover_png_540x.jpg?v=1656504182",name:"Kimaye Kale (Curled)(1 pc-200 g)",price:"135"}, 
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Lettuce-Icebergcover_png_540x.jpg?v=1655979138",name:"Kimaye Lettuce (Iceberg)",price:"67"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/pak-choicover_540x.jpg?v=1655887460",name:"Kimaye Pak Choi (1 pc-200g)",price:"65",},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/ParsleyFlatExoticcover_540x.jpg?v=1656421939",name:"Kimaye Parsely (Flat)(1 pc-100 g)",price:"55"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Spinachcover_png_540x.jpg?v=1655984781",name:"Kimaye Spinach (1 pc-200 g)",price:"49"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Zucchinicover_540x.jpg?v=1658484948",name:"Kimaye Zucchini (Green) 1 pc",price:"77"},
   
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