//variables

let audio1 = new Audio('heavy-rain-daniel_simon.mp3');
const audioCtx = new AudioContext();

const container = document.getElementById("container");
const canvas = document.getElementById("canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let audioSource;
let analyzer;

//

container.addEventListener("click", () => {
    audio1.play();
    audioSource = audioCtx.createMediaElementSource(audio1); //setting audio 1 as source
    analyzer = audioCtx.createAnalyser(); //exposes audio data
    audioSource.connect(analyzer);
    analyzer.connect(audioCtx.destination);
    analyzer.fftSize = 64;  //number of audio samples we want in audio data file

    const bufferLength = analyzer.frequencyBinCount; //read only property on analyzer, contains data values thatll be in analyzer data file. always half of fftsize
    const dataArray = new Uint8Array(bufferLength); //converting bufferlength into uint8array that only contains unassigned 8 bit integers

    const barWidth = canvas.width / bufferLength;
    let barHeight;
    let x = 0;
});