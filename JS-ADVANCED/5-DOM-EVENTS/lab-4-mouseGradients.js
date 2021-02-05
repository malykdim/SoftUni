function attachGradientEvents() {
    function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    
    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunk(power * 100);
        document.getElementById('result').textContent = power + "%";
    }
    
    function gradientOut(event) {
        document.getElementById('result').textContent = " ";
    }
}
}
