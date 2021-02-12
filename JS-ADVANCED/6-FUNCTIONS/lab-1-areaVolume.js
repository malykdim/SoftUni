function areaVolume(area, vol, input) {
    const figures = JSON.parse(input);
    
    const result = [];
    
    for(let figure of figures) {
        const output = {
            area: Math.abs(area.call(figure)),
            volume: Math.abs(vol.call(figure))
        };
        result.push(output);
    }
    
    return result;
}


const example1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
]`;

console.log(areaVolume(area, vol, example1));


function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}

