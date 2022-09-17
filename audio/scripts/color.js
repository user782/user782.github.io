function gradientColor(startColor, endColor, currIndex, totalNum) {
    let startRGB = convertRgb(startColor);//转换为rgb数组模式
    let startR = startRGB[0];
    let startG = startRGB[1];
    let startB = startRGB[2];
    let endRGB = convertRgb(endColor);
    let endR = endRGB[0];
    let endG = endRGB[1];
    let endB = endRGB[2];
    let stepR = (endR - startR) / totalNum;
    let stepG = (endG - startG) / totalNum;
    let stepB = (endB - startB) / totalNum;
    return colorToHex(parseInt(stepR * currIndex + startR) + ',' + parseInt(stepG * currIndex + startG) + ',' + parseInt(stepB * currIndex + startB));
}

function convertRgb(sColor) {
    let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    sColor = sColor.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            let sColorNew = "#";
            for (let i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        // 处理六位的颜色值
        let sColorChange = [];
        for (let i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return sColorChange;
    } else {
        return sColor;
    }
}

function colorToHex(color) {
    let rgb = color.split(',');
    let r = parseInt(rgb[0]);
    let g = parseInt(rgb[1]);
    let b = parseInt(rgb[2]);
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}