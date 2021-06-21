var n = Math.floor(Math.random() * 6) + 1;
var n2 = Math.floor(Math.random() * 6) + 1;
var rImage = "images/dice" + n + ".png";
var rImage2 = "images/dice" + n2 + ".png";

document.querySelector(".img1").setAttribute("src" , rImage);
document.querySelector(".img2").setAttribute("src" , rImage2);

if(n>n2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else if(n2>n){
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}
else{
  document.querySelector("h1").innerHTML = "🚩Draw / Tie🚩";
}
