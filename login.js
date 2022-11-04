var attempt = 5; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
if ( username == "156177" ){
alert ("Welcome Vishnu");
window.location = "homepage.html"; // Redirecting to other page.
return false;
}
if ( username == "125185" ){
alert ("Welcome nitin");
window.location = "homepage.html"; // Redirecting to other page.
return false;
}
if ( username == "166218" ){
    alert ("Welcome Adharsh ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "135571" ){
    alert ("Welcome Dhikshan ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "135700" ){
    alert ("Welcome Gokula Krishna");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "186731" ){
    alert ("Welcome Harsha Varma");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
if ( username == "135523" ){
    alert ("Welcome Joshua ");
    window.location = "homepage.html"; // Redirecting to other page.
    return false;
}
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}