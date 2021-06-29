
var noOfInstruments = document.querySelectorAll(".instrument").length

for(var i=0; i<noOfInstruments; i++){
    document.querySelectorAll(".instrument")[i].addEventListener("click", function(){
        
        var instrumentId = this.id;
        makeSounds(instrumentId);
        instrumentAnimation(instrumentId);
    });
}

document.addEventListener("keydown", function(event){
    var keyPressed = event.key;
    if(keyPressed == " "){
        keyPressed = "kick";
    }
    makeSounds(keyPressed);
    instrumentAnimation(keyPressed);
});

function makeSounds(key){
    switch(key){
        case "a":
            var audio_a = new Audio("sounds/tom-3.mp3")
            audio_a.play();
            break;
        case "s":
            var audio_s = new Audio("sounds/tom-1.mp3")
            audio_s.play();
            break;
        case "j":
            var audio_j = new Audio("sounds/tom-2.mp3")
            audio_j.play();
            break;
        case "k":
            var audio_k = new Audio("sounds/snare.mp3")
            audio_k.play();
            break;
        case "l":
            var audio_l = new Audio("sounds/crash.mp3")
            audio_l.play();
            break;
        case "kick":
            var audio_kick = new Audio("sounds/kick-bass.mp3")
            audio_kick.play();
            break;
        default:
            console.log(key);
    }
}

function instrumentAnimation(currentInstrument){
    var activeInstrument = document.querySelector("#" + currentInstrument);
    activeInstrument.classList.add("pressed");
    setTimeout(function(){
        activeInstrument.classList.remove("pressed");
    },100)
}