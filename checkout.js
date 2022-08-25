
let data=JSON.parse(localStorage.getItem("cart"))||[];
console.log(data)

data.map(function app(el){
    let tr2=document.createElement("tr");

    let pImg=document.createElement("img");
    pImg.src=el.img;
    pImg.setAttribute("class","productimg");
    let td2=document.createElement("td");
    td2.append(pImg);

    let name=document.createElement("td");
    name.setAttribute("class","name")
    name.textContent=el.name;

    let price=document.createElement("td");
    price.textContent=el.price;
    price.setAttribute("class","price");

    tr2.append(td2,name,price);
    document.getElementById("vikas_tbody").append(tr2);
})

let sum=JSON.parse(localStorage.getItem("sum"));

console.log(sum);

document.getElementById("price1").innerText= `₹ ${sum}`;
document.getElementById("price2").innerText= `₹ ${sum}`;