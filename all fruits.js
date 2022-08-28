//document.getElementById("btn").addEventListener("click",subfun)
import  {navbar, footer } from "./componants/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("footer").innerHTML = footer();

var bonusData = [
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cherry-imported_360x.jpg?v=1626511016",name:"Kimaye Cherries (USA Northvest)(Pack of 125gm)",price:"105",},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Custard-Apple-A_360x.jpg?v=1632485463",name:"Kimaye Custard Apple",price:"266",},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/reddragonfruit_18fa2ad7-5134-4318-917b-7fff3a835875_360x.jpg?v=1644990909",name:"Kimaye Dragon Fruit(Red)(1 Pc)",price:"105"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Shimla-Apples-cover_360x.jpg?v=1632485361",name:"Kimaye Shimala Apple (Pack of 3 & 6)",price:"259"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Indian-Plum_360x.jpg?v=1627642547",name:"Kimaye Indian Plum(250 g)",price:"71"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/5e8b2ee6-ce8e-42e9-959f-d43c544f586a_360x.png?v=1616326949",name:"Kimaye Blueberries",price:"285"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Avocado_360x.jpg?v=1652191066",name:"Kimaye Avocado",price:"155"}, 
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Cherry--_-blueberry_360x.jpg?v=1654851019",name:"Norhtvest Cherries-Blueberrries combo",price:"654"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Muskmelon-cover_360x.jpg?v=1633763200",name:"Kimaye Muskmelon(1 pc)",price:"62",},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Papaya-cover_360x.jpg?v=1638875170",name:"Kimaye Papaya",price:"85"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover_19473cce-96ae-4149-aaa1-508f17ac6c28_360x.jpg?v=1648186636",name:"Kimaye Watermelon (1 pc)",price:"65"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover_360x.jpg?v=1647932788",name:"Kimaye Green Apple (Pack Of 3 pc & 6 pc)",price:"366"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Mini-Oranges-cover_bbce1a6a-4ab6-4a62-8928-3a956ed7b8cf_360x.jpg?v=1649913612",name:"Kimaye Mini Orange",price:"119"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/a0cfceb5-76a4-4994-9d37-978c6dc3b309_360x.png?v=1611811512",name:"Kimaye Imported Orange (Pack of 3 & 6)",price:"345"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/royal-gala-apple-cover_360x.jpg?v=1643012816",name:"Kimaye Royal Gala Apples (Pack Of 3 & 6)",price:"340"}, 
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/grapefruit-cover_360x.jpg?v=1639461484",name:"Kimaye Grapefruit (Pack Of 2 & 4)",price:"289"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/dragon-fruit--white-cover_360x.jpg?v=1632470660",name:"Kimaye Dragon Fruit (1 pc)",price:"89"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover-sun-melon_360x.jpg?v=1620314805",name:"Kimaye Sun Melon (1 pc)",price:"51"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/washington-applecover_360x.jpg?v=1641449752",name:"Kimaye Washington Apple (Pack of 2 pc & 4 pc)",price:"269"},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/47dfb7d1-d8d3-4c96-bda9-7dc85dfdec51_119283b1-bac0-4798-8af7-e4259a3a4b22_360x.jpg?v=1633861455",name:"Arils Festive Pack (Pack of 5 cups)",price:"260"},
   
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







