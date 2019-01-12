import {calculateOboi} from "../js/oboi";

test('Should calculate oboi', () =>{
    const roomPerimetr = 5.75;
    const roomHeight = 2.75;
    const oboiWidth = 0.75;
    const oboiLength = 12;

    const rulon = calculateOboi(roomPerimetr, roomHeight, oboiWidth, oboiLength);

    expect(rulon).toBe(33);
});