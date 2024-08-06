//variables

const btnOne = document.getElementById("button-1");
const audioCtx = new AudioContext();

console.log(audioCtx);

//button 1

btnOne.addEventListener("click", () => {
    audioOne.play();
    audioOne.addEventListener("playing", () => {
        console.log("playing");
    });
});

//button 2

const btnTwo = document.getElementById("button-2");

btnTwo.addEventListener("click", () => {
    playSound();
});

function playSound() {
    const oscillator = audioCtx.createOscillator(); //creates audio node that generates a tone
    oscillator.connect(audioCtx.destination); //destination = default audio rendering device (most likely speakers)
    oscillator.type = "sine"; //sine square triangle sawtooth
    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
    }, 1000);
}