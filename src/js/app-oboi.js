import {calculateOboi} from './oboi.js';

const perimetrRoomEl = document.getElementById('perimetrRoom');
const heightRoomEl = document.getElementById('heightRoom');
const oboiWidhtEl = document.getElementById('oboiWidht');
const oboiLenghtEl = document.getElementById('oboiLenght');
const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result');

calculateEl.addEventListener('click', function () {
    const perimetrRoom = parseInt(perimetrRoomEl.value);
    const heightRoom = parseInt(heightRoomEl.value);
    const oboiWidht = parseInt(oboiWidhtEl.value);
    const oboiLenght = parseInt(oboiLenghtEl.value);

    resultEl.textContent = calculateOboi(perimetrRoom, heightRoom, oboiWidht, oboiLenght);

});
