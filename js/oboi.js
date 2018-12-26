 export function calculateOboi(roomPerimetr, roomHeight, oboiWidth, oboiLength) {
    let sizeP = roomPerimetr;
    let sizeH = roomHeight + 0.1;
    let sizeOboiW = oboiWidth;
    let sizeOboiL = oboiLength;

    let polosaOboi = sizeP/sizeOboiW;
    let dlinaOboi = sizeH/sizeOboiL;

    let result = polosaOboi/dlinaOboi;

    return Math.ceil(result);
}

console.log(calculateOboi(5.75, 2.75, 0.75, 12));
