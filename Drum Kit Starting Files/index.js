var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(let i = 0;i < numberOfDrumButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttoninnerHTML = this.innerHTML;
       makeSound(buttoninnerHTML);
      
    });
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

        
        case "j":
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
        
        case "k":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

        case "l":
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
       }
    
}










//document.querySelector("button").addEventListener("click",function handleClick(){
  //alert("I got Clicked!")
//});

document.getElementById("calculate").addEventListener("click",function cal(){
        var number = Number(document.getElementById("number").value);
        var number = number;

        var sum = number * number * 3.14;
        document.getElementById("answer").innerHTML = sum;
        
        

})