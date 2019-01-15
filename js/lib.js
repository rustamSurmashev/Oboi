export function calculateWallpaper(roomPerimeter, roomHeight, wallpaperWidth, wallpaperLength) {
    let sizePerimeter = roomPerimeter;
    let sizeHeidht = roomHeight + 10;
    let sizeWallpaperWidth = wallpaperWidth;
    let sizeWallpaperLenght = wallpaperLength;

    let lineWallpaper = sizePerimeter/sizeWallpaperWidth;
    let lenghtWallpaper = sizeHeidht/sizeWallpaperLenght;

    let result = lineWallpaper/lenghtWallpaper;

    return Math.ceil(result);
}
