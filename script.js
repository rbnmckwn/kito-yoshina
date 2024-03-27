"use strict";

document.addEventListener('mousemove', function(e) {
    let percentage = e.clientY / window.innerHeight;
    let colorValue = interpolateColor("#565555","#949292", percentage);
    document.body.style.color = colorValue;
    document.links.style.color = colorValue;
});

function interpolateColor(color1, color2, factor) {
    let result = "#";
    for(let i = 1; i <= 5; i += 2) {
        let color1Value = parseInt(color1.slice(i, i + 2), 16);
        let color2Value = parseInt(color2.slice(i, i + 2), 16);
        let interpolatedValue = Math.round(color1Value + (color2Value - color1Value) * factor);
        result += ("0" + interpolatedValue.toString(16)).slice(-2);
    }
    return result;
}