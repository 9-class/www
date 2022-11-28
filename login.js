function validate() {
var username = document.getElementById("username").value.trim();
var password = document.getElementById("password").value.trim();
if ( username == "VISHNU VIKRAM" && password == "20173portal"){
alert ("Welcome Vishnu");
window.location = "homepage.html"; // Redirecting to other page.
return false;
}
if ( username == "NITIN KAMAL" && password == "125185" ){
alert ("Welcome nitin");
window.location = "homepage.html"; // Redirecting to other page.
return false;
}
if ( username == "ADHARSH" && password == "166218"){
    alert ("Welcome Adharsh ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "DHIKSHAN" && password == "135571"){
    alert ("Welcome Dhikshan ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "GOKULA KRISHNAN" && password == "135700"){
    alert ("Welcome Gokula Krishna");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "HARSHA VARMAN" && password == "186731"){
    alert ("Welcome Harsha Varman");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "JOSHUVA" && password == "135523"){
    alert ("Welcome Joshua ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "MITRAN" && password == "125104"){
    alert ("Welcome Mitran   ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
    }
if ( username == "PRAVEEN" && password == "125292"){
    alert ("Welcome Praveen  ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
    }
if ( username == "SAICHIRANJEEVI" && password == "176417"){
    alert ("Welcome Sai Chiranjeevi   ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
    }
if ( username == "SANJAY" && password == "156106"){
    alert ("Welcome Sanjay ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "SRI VARSHAN" && password == "125206"){
    alert ("Welcome Srivarshan ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "SHASWAD" && password == "146079"){
    alert ("Welcome Shaswad ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "SESHAVARDHAN" && password == "125169"){
    alert ("Welcome Seshavardhan ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "TINAKARAN" && password == "125025"){
    alert ("Welcome Tinakaran ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "KAMALA KANNAN"){
    alert ("Welcome Kamala Kannan sir!");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if (username == "ARUNA") {
    alert("Welcome Aruna mam!")
    window.location = "homepage.html";
    return false;
}
if (username == "SELECT") {
    alert ("Please choose an username.");
    window.location = "index.html";
    return false;
}
else {
    alert ("Username or password was wrong!")
    return false;
}
}

const password1 = document.querySelector("#password");
const toggleshow = document.querySelector("#showpass");
const hideshow = document.querySelector("#hidepass");

toggleshow.addEventListener("click", function () {
    password1.setAttribute("type", Text);
    document.getElementById("showpass").style.display = "none";
    document.getElementById("hidepass").style.display = "initial";
});
hideshow.addEventListener("click", function () {
    password1.setAttribute("type", 'password');
    document.getElementById("hidepass").style.display = "none";
    document.getElementById("showpass").style.display = "initial";
});
