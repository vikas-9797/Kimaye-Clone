function signup_log(e) {

    event.preventDefault();
    let myForm = document.getElementById("myForm");
    let name = myForm.name.value;
    let email = myForm.email.value;
    let phone = myForm.phone.value;
    let password = myForm.password.value;

    // console.log(name,email,password)
    if (localStorage.getItem('users') === null) {
        localStorage.setItem("users", JSON.stringify([]));
    }
    let user = {
        name,
        email,
        phone,
        password,
    };

    let arr = JSON.parse(localStorage.getItem("users"))
    // window.location.href = "login.html"
    console.log("Pp")
    arr.push(user);
    localStorage.setItem("users", JSON.stringify(arr));


}
let login_css = () => {
    return ` 

#myForm {
    padding: 2%;
    position: relative;
    left: 5%;
}

.profile_icon>img {
    height: -9%;
    width: 25%;
}

#login_layout {
    top: 70px;
    width: 30%;
    overflow: scroll;
    padding: 1%;
    height: 475px;
    margin-left: 70%;
    background-color: white;
    position: relative;



}

.signin_topbar {
    background: black;
    color: white;
    height: 80px;
    width: 100%;
    margin-top: 0;
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
    font-size: 25px;
    text-align: left;
    padding-left: 20px;

}

.profile_icon>img {
    height: 40%;
    width: 40%;
}

input {
    width: 90%;
    height: 30px;
    margin: auto;
}


button {
    width: 93%;
    height: 40px;
    margin: auto;
    border: 2px solid black;
    font-size: 15px;
    font-weight: bolder;
    color: black;
    background-color: white;
}

button:hover {

    margin: auto;


    font-weight: bolder;
    color: white;
    background-color: rgb(86, 85, 85);
}

strong {
    color: red;
}

.fa {
    font-size: 31px;
    margin-left: 45%;
}

.facebook_bar {
    background-color: #3b5998;
    color: white;
    height: 28px;
    text-align: initial;
    display: flex;
    padding: 2%;
    margin-bottom: 5%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    padding-left: 26px;
}

#google_log {
    margin-left: 10%;
    margin-left: 47%;
}

#center_bar {
    text-align: center;
}

.fa fa-facebook oxi_icon oxi_icon_facebook {
    text-align: center;
}

.google_bar {
    background-color: #DB4437;
    color: white;
    display: flex;
    height: 28px;
    text-align: initial;
    padding: 2%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    /* padding-top: 5px; */
    padding-left: 26px;
}


#creat_ac {
    width: 70%;
    height: 40px;
    margin: auto;
    border: 3px solid black;
    font-size: 15px;
    font-weight: bolder;
    color: black;
    background-color: white;
}

p {
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h3 {

    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}`
}

export { login_css }