// document.querySelector("button").addEventListener("click",clicked);

// function clicked(){
//   alert("I got clicked!");  
// }

// now writing in anonymous function
var size=document.querySelectorAll("button").length;
for(var i=0;i<size;i++){


document.querySelectorAll("button")[i].addEventListener("click",function(){
    
    console.log(this);
    var word=this.textContent;
    makesound(word);
    keyanimation(word);

});
}
document.addEventListener("keypress",function(event){
makesound(event.key);
keyanimation(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
            var audio =new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio =new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio =new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio =new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "g":
            var audio =new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio =new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio =new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function keyanimation(key){
   var active_button= document.querySelector("."+key);
   active_button.classList.add("pressed");
   setTimeout(function(){
    active_button.classList.remove("pressed");
    
   }, 100);
}