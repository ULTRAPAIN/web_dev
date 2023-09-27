var dice=Math.floor(Math.random()*6);
var dice2=Math.floor(Math.random()*6);
console.log(dice);
var name1=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
document.querySelector(".img1").setAttribute("src","./images/"+name1[dice]);
document.querySelector(".img2").setAttribute("src","./images/"+name1[dice2]);

if(dice>dice2){
    // document.querySelector(".img3").setAttribute("src","./images/winner.png");
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
    
}
else if(dice==dice2){
    // document.querySelector(".img3").setAttribute("src","./images/winner.png");
    // document.querySelector(".img4").setAttribute("src","./images/winner.png");
    document.querySelector("h1").innerHTML="Tied";
}
else{
    // document.querySelector(".img4").setAttribute("src","./images/winner.png");
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}