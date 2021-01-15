function timeToWalk(steps, footprint, speedKmH) {
    const speed = speedKmH * 1000 / 3600; 
    // 5km/1h => ?m/?s 
    // 5 * 1000 (km -> m) 
    // 1 * 3600 (h -> s)
    // 5000m / 3600s = 1.38m/s
    // 1 meter 38cm per 1 second
    const distance = steps * footprint;
    const rest = Math.floor(distance / 500) * 60;
    const time = distance / speed + rest;
    
    const hours = Math.floor(time / 60 / 60).toFixed(0).padStart(2, '0');
    const minutes = Math.floor((time - hours*3600) / 60).toFixed(0).padStart(2, '0');
    // const minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');    
    const seconds = (time - hours*60*60 - minutes*60).toFixed(0).padStart(2, '0'); 
    // const seconds = (time % 60).toFixed(0).padStart(2, '0'); 
    
    return `${hours}:${minutes}:${seconds}`;
}

console.log(timeToWalk(4000, 0.60, 5));
console.log(timeToWalk(2564, 0.70, 5.5));

// 100/100

/* 
let seconds = time % 60;
time -= seconds;
time /= 60;

let minutes = time % 60;
time -= minutes;
time /= 60;
 */