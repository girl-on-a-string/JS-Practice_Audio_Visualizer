//variables

let audio1 = new Audio();
const audioCtx = new AudioContext();

const container = document.getElementById("container");
const canvas = document.getElementById("canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let audioSource;
let analyzer;

//