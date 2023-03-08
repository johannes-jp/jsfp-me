export function getStringWidth(str) {
    const elem = document.createElement('span');
    elem.style.position = 'absolute';
    elem.style.visibility = 'hidden';
    elem.style.whiteSpace = 'nowrap';
    elem.innerText = str;
    document.body.appendChild(elem);
    const width = elem.offsetWidth;
    document.body.removeChild(elem);
    return width;
}

// export function getStringWidth(text, font) {
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");
//     ctx.font = font;
//     return ctx.measureText(text).width;
// }