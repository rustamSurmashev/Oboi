import {calculateOboi} from "../js/oboi";

test('Should calculate oboi', () =>{
    const roomPerimetr = 575;
    const roomHeight = 275;
    const oboiWidth = 75;
    const oboiLength = 1200;

    const rulon = calculateOboi(roomPerimetr, roomHeight, oboiWidth, oboiLength);

    expect(rulon).toBe(33);
});