/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
let time = document.getElementById('current-time');
setInterval(() =>{
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
},10)
let marq = document.getElementById('wish');
setInterval(() =>{
  let dt = new Date();
  let gt = dt.getDate();
  let ot = dt.getMonth() + 1;
  if (gt == 15 && ot == 12) {
    marq.innerHTML = "Its Adharsh's birthday, don't forgot to wish him!";
  } else if (gt == 10 && ot == 10) {
    marq.innerHTML = "Its Balaji and keerthivasan's birthday, don't forgot to wish them!";
  } else if (gt == 14 && ot == 12) {
    marq.innerHTML = "Its Dhikshan's birthday, don't forgot to wish him!";
  } else if (gt == 1 && ot == 10) {
    marq.innerHTML = "Its Gokula Krishnan's birthday, don't forgot to wish him!";
  } else if (gt == 18 && ot == 8) {
    marq.innerHTML = "Its Harsha Varman's birthday, don't fotgot to wish him!";
  } else if (gt == 3 && ot == 7) {
    marq.innerHTML = "Its Joshuva's birthday, don't forgot to wish him!";
  } else if (gt == 20 && ot == 1) {
    marq.innerHTML = "Its Mitran's birthday, don't forgot to wish him!";
  } else if (gt == 21 && ot == 10) {
    marq.innerHTML = "Its Nitin Kamal(co-founder)'s birthday, don't forgot to wish him!";
  } else if (gt == 27 && ot == 7) {
    marq.innerHTML = "Its Praveen's birthday, don't forgot to wish him";
  } else if (gt == 26 && ot == 11) {
    marq.innerHTML = "Its Sanjay's birthday, don't forgot to wish him!";
  } else if (gt == 11 && ot == 12) {
    marq.innerHTML = "Its Shaswad's birthday, don't forgot to wish him!";
  } else if (gt == 26 && ot == 2) {
    marq.innerHTML = "Its Seshavardhan's birthday, don't forgot to wish him!";
  } else if (gt == 17 && ot == 2) {
    marq.innerHTML = "Its Srivarshan's birthday, don't forgot to wish him!";
  } else if (gt == 14 && ot == 3) {
    marq.innerHTML = "Its Saichiranjeevi's birthday, don't forgot to wish him!";
  } else if (gt == 5 && ot == 3) {
    marq.innerHTML = "Its Tinakaran's birthday, don't forgot to wish him!";
  } else if (gt == 2 && ot == 12) {
    marq.innerHTML = "Its Vishnu Vikram(founder)'s birthday, don't forgot to wish him!";
  } else if (gt == 15 || 16 || 17 || 18 && ot == 1) {
    marq.innerHTML - "Happy Pongal";
  } else if (gt == 15 && ot == 8) {
    marq.innerHTML = "Happy Independence day, Jai Hindh";
  } else if (gt == 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 && ot == 9) {
    marq.innerHTML = "Happy Onam";
  } else if (gt == 25 && ot == 12) {
    marq.innerHTML = "Happy Christmas";
  } else if (gt == 30 && ot == 7) {
    marq.innerHTML = "Happy Friendship Day! Don't forgot to wish your friends!";
  } else if (gt == 22 || 23 || 24 || 25 || 26 && ot == 10) {
    marq.innerHTML = "Happy Diwali";
  }
},50)
var rollno = document.forms['login']['roll'];

var roll_error = document.getElementById('roll_error');

rollno.addEventListener('textInput', roll_Verify);

function validate() {
	if (rollno.value.length < 6) {
		rollno.style.border = "1px solid red";
		roll_error.style.display = "block";
		rollno.focus();
		return false;
	}
  if (rollno.value == '125185') {
    window.open('https://class-8.github.io/8c/co-founder.html');
    window.close();
  } else if (rollno.value == '166218') {
    window.open('https://class-8.github.io/8c/adharsh.html');
    window.close();
  } else if (rollno.value == '135571') {
    window.open('https://class-8.github.io/8c/dhikshan.html');
    window.close();
  } else if (rollno.value == '135700') {
    window.open('https://class-8.github.io/8c/gokul.html');
    window.close();
  } else if (rollno.value == '186731') {
    window.open('https://class-8.github.io/8c/harsha.html');
    window.close();
  } else if (rollno.value == '135523') {
    window.open('https://class-8.github.io/8c/joshuva.html');
    window.close();
  } else if (rollno.value == '125104') {
    window.open('https://class-8.github.io/8c/mitran.html');
    window.close();
  } else if (rollno.value == '125292') {
    window.open('https://class-8.github.io/8c/praveen.html');
    window.close();
  } else if (rollno.value == '176417') {
    window.open('https://class-8.github.io/8c/sai.html');
    window.close();
  } else if (rollno.value == '156106') {
    window.open('https://class-8.github.io/8c/sanjay.html');
    window.close();
  } else if (rollno.value == '125206') {
    window.open('https://class-8.github.io/8c/srivarshan.html');
    window.close();
  } else if (rollno.value == '146079') {
    window.open('https://class-8.github.io/8c/shaswad.html');
    window.close();
  } else if (rollno.value == '125169') {
    window.open('https://class-8.github.io/8c/seshavardhan.html');
    window.close();
  } else if (rollno.value == '125025') {
    window.open('https://class-8.github.io/8c/tina.html');
    window.close();
  } else if (rollno.value == '156177') {
    window.open('https://class-8.github.io/8c/founder.html');
    window.close();
  }
}
function roll_Verify(){
	if (rollno.value.length == 6) {
		rollno.style.border = "2px solid silver";
		roll_error.style.display = "none";
		return true;
	}
}
function windowclose() {
  window.close();
}
