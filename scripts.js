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
  } else if (gt == 10||11||12||13||14 && ot == 10) {
    marq.innerHTML = "Happy Diwali";
  }
},50)
