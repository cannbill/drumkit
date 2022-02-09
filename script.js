let boom = document.getElementById("boomboom");
let clap = document.getElementById("clapclap");
let hihat = document.getElementById("hihathihat");
let kick = document.getElementById("kickkick");
let openhat = document.getElementById("openhatopenhat");
let ride = document.getElementById("rideride");
let snare = document.getElementById("snaresnare");
let tink = document.getElementById("tinktink");
let tom = document.getElementById("tomtom");

document.addEventListener('keypress', (keyValue) => {
    if (keyValue.keyCode == 97) {
        boom.pause()
        boom.currentTime = 0
        boom.play();
        }
    else if 
        (keyValue.keyCode == 115) {
        clap.pause()
        clap.currentTime = 0
        clap.play();
        }
        else if 
        (keyValue.keyCode == 100) {
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
        }
        else if 
        (keyValue.keyCode == 102) {
        kick.pause()
        kick.currentTime = 0
        kick.play();
        }
        else if 
        (keyValue.keyCode == 103) {
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
        }
        else if 
        (keyValue.keyCode == 104) {
        ride.pause()
        ride.currentTime = 0
        ride.play();
        }
        else if 
        (keyValue.keyCode == 106) {
        snare.pause()
        snare.currentTime = 0
        snare.play();
        }
        else if 
        (keyValue.keyCode == 107) {
        tink.pause()
        tink.currentTime = 0
        tink.play();
        }
        else if 
        (keyValue.keyCode == 108) {
        tom.pause()
        tom.currentTime = 0
        tom.play();
        }
    })