var user1=Math.floor((Math.random()*6)+1);
var user2=Math.floor((Math.random()*6)+1);

document.querySelector(".img1").setAttribute("src","images/dice"+user1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+user2+".png");

if (user1>user2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}else if (user1<user2){
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}