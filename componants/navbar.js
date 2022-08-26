

let navbar = () => {
    return `
    <Div id="left">
    <div class="dropdown">
        <span>SHOP</span>
        <div class="dropdown-content">
            <p>ALL FRUITS</p>
            <p>ALL VEGGIES</p>
            <p>FRESH CUTS</p>
            <p>GIFTS BY KIMAYE</p>
            <p>COMMUNITY BUYING</p>
        </div>
    </div>
    <div class="learn-dropdown">
        <span>LEARN</span>
    
    <div class="learn-content">
        <p>OUR STORY</p>
        <p>WHY KIMAYE</p>
        <p>TRACEABILITY</p>
        <p>BEYOND FRUITS</p>
    </div>
</div>
<a href="">GROW</a>
</Div>
<div id="logo">
    <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204" alt="logo">
</div>
<div id="right">
    <div id="location">
        <img src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_map_location_logo_icon_159350.png" alt="">
        <p>Mumbai</p>
    </div>
    <img id="search" src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="">
    <img id="profile" src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg" alt="">
    <img id="cart" src="https://www.pngkey.com/png/full/154-1547182_bag-clipart-logo-png-shopping-bag-icon-png.png" alt="">



</div>`;
}

let footer = () => {
    return ` <div id="foot1">
    <div>
      <h4>FAQ's</h4>
      <h4>Contact Us</h4>
      <h4>Shipping & Return Policy</h4>
      <h4>Terms & Conditions</h4>
      <h4>Privercy Policy</h4>
     
     
    </div>
    <div>
      <h4>Follow us on</h4>
      <div>
          <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756" alt="">
          <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756" alt="">
          <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756" alt="">
      </div>
    </div>
  </div>
    <hr>
    <div id="foot2">
    <div>
      <p>Copyright@2020.All Rights Reserved</p>
    </div>
  <div>
      <img style="height: 40px;width:90px" src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/ting.png?v=1599565040" alt="">
    </div>
  </div>`
}

export {navbar, footer};