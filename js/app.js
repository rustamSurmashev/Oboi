import {calculateWallpaper} from "./lib.js";

const perimeterRoomEl = document.getElementById('perimeterRoom');
const heightRoomEl = document.getElementById('heightRoom');
const wallpaperWidhtEl = document.getElementById('wallpaperWidht');
const wallpaperLenghtEl = document.getElementById('wallpaperLenght');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

calculateEl.addEventListener('click', function () {
    const perimeterRoom = parseInt(perimeterRoomEl.value);
    const heightRoom = parseInt(heightRoomEl.value);
    const wallpaperWidht = parseInt(wallpaperWidhtEl.value);
    const wallpaperLenght = parseInt(wallpaperLenghtEl.value);

    resultEl.textContent = calculateWallpaper(perimeterRoom, heightRoom, wallpaperWidht, wallpaperLenght);

});
