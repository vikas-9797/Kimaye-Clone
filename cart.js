


let data=JSON.parse(localStorage.getItem("cart"))||[];


if(data.length==0){

  let img=document.createElement("img");
  img.src="https://media.istockphoto.com/photos/shopping-cart-3d-icon-isolated-illustration-picture-id898898134?k=20&m=898898134&s=612x612&w=0&h=PI_DsCSjlNKbdz4s3a6aZCIFBE9OLcC8uZ8zqK72Kog="

  let blank=document.createElement("p");
  blank.innerText="YOUR CART IS CURRENTLY EMPTY.";

  let store=document.createElement("button");
  store.innerText="RETURN TO SHOP";
  store.addEventListener("click", function (){
    window.location.href="all fruits.html";
  })
document.getElementById("vikas_if_empty").append(img,blank,store);
}

else{
  data.innerHTML="";
  priceSumArr=[];
  
    data.map(function app(el){
    let tr2=document.createElement("tr");

    let cross=document.createElement("img");
    cross.src="data:image/png;base64,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"
    cross.setAttribute("class","close_icon");
    cross.addEventListener("click", ()=>{
          for(var i=0; i<data.length; i++){
               var current=data[i];
               if(current.name==el.name){
                   data.splice(i ,1);
                   let e= localStorage.setItem("cart" , JSON.stringify(data));
                   
                    location.reload();
                  
                   break;
               }
            }
     });
    let td1=document.createElement("td");
    td1.append(cross);
      
    let pImg=document.createElement("img");
    pImg.src=el.image;
    pImg.setAttribute("class","productimg");
    let td2=document.createElement("td");
    td2.append(pImg);
    
    let name=document.createElement("td");
    name.setAttribute("class","name")
    name.innerText=el.name;

    let price=document.createElement("td");
    price.innerText=el.price;
    price.setAttribute("class","price");

    let qty=1;
    let x=1;

    let div=document.createElement("div");
    div.setAttribute("class","flex");
    
    let plus=document.createElement("button")
    plus.innerText="+";
    plus.setAttribute("class","pluse");
    plus.addEventListener("click",function (event){
        event.preventDefault();
            qty++;
        total_qty.innerText=qty;
      
          x=qty*el.price;
          total.innerText=x;
    })

    let minus=document.createElement("button");
    minus.innerText="-";
    minus.setAttribute("class","hypen");
    minus.addEventListener("click",function (event){
      event.preventDefault();
      if(qty>1){
            qty--;
        total_qty.innerText=qty;
      
          x=qty*el.price;
          total.innerText=x;
      }
      else{
          qty=1;
      }
  })

    let total_qty=document.createElement("td");
    total_qty.innerText=qty;
    total_qty.setAttribute("class","qty");

    div.append(plus,total_qty,minus);

    x=qty*el.price;

    let total=document.createElement("td");
    total.setAttribute("class","total")
    total.style.color="black"
    total.style.fontSize="25px"
    total.style.fontWeight="bold"
    total.innerText=x;
    total_sum(x)
    priceSumArr.push(x);
   


    tr2.append(td1,td2,name,price,div,total);

    document.getElementById("vikas_tbody").append(tr2)
    
});
function total_sum(x){
  var total=data.reduce((m,n)=>{
      return m+x;
  },0)
console.log(total);

}


let sum=0;
for(let i=0;i<priceSumArr.length;i++){
        sum +=priceSumArr[i];
    }

    console.log(sum);

    localStorage.setItem("sum",JSON.stringify(sum));
    document.getElementById("price1").innerText=`₹ ${sum}`;
    document.getElementById("price2").innerText=`₹ ${sum}`; 

  }