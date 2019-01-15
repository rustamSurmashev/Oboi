import {calculateWallpaper} from '../js/lib.js';

test('Should calculate wallpaper', () =>{
    const roomPerimeter = 575;
    const roomHeight = 275;
    const wallpaperWidth = 75;
    const wallpaperLength = 1200;

    const roll = calculateWallpaper(roomPerimeter, roomHeight, wallpaperWidth, wallpaperLength);

    expect(roll).toBe(33);
});