var bonusData = [
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7812_360x.jpg?v=1661146423",name:"Fruit Box By Kimaye (Adore)",price:"₹1900",},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7790_360x.jpg?v=1631346990",name:"Fruit Box By Kimaye (Strength)",price:"₹1500",},
    {image:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7821_360x.jpg?v=1631350656",name:"Fruit Box By Kimaye (Cherish)",price:"₹1400"},
    
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