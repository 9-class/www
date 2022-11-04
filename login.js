var attempt = 3; // Variable to count number of attempts.
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