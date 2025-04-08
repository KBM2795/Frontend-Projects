

function Sign() {
    let signup = document.getElementById("signup");
    let thanks = document.getElementById("thanks");
    let contact = document.getElementById("contact");
    let username = document.getElementById("User-name").value;
    let output = document.getElementsByClassName("thanks-output");

    if (contact.style.display = "flex") {
        contact.style.display = 'none';
        thanks.style.display = "flex";
        output.style.display = "block"
        output.innertext = username;
        
    }
}

function back() {
    let back = document.getElementById("back");
    let thanks = document.getElementById("thanks");
    let contact = document.getElementById("contact");
    
    let back1= confirm("Are you sure you want to go back?");

    if (back1==true) {
        thanks.style.display = 'none';
        contact.style.display = "flex";

    }


}


function login(){
    let loginbutton = document.getElementById("login1")
    let loginpage= document.getElementById("login-page");
    let home = document.getElementById("home");
    
    
    if (loginpage.style.display = "none") {
        loginpage.style.display = "block";
    }
}

function backlogin() {
    let crossimg = document.getElementById("cross-img");
    let loginpage= document.getElementById("login-page");
    
    if(loginpage.style.display = "block") {
        loginpage.style.display = "none";
}
}



function loginsucess(){
    let beforeogin= document.getElementById("before-login")
    let afterlogin= document.getElementById("after-login")

    if(beforeogin.style.display = "block") {
        beforeogin.style.display = "none";
        afterlogin.style.display = "block";
    }
}


