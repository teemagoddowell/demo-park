document.addEventListener('DOMContentLoaded', function() {
    const carPlate = sessionStorage.getItem('carPlate');
    const carPlateDisplay = document.getElementById('carPlateDisplay');
    carPlateDisplay.textContent = 'License Plate: ' + carPlate;

    const timerDisplay = document.getElementById('timerDisplay');
    let startTime = Date.now();
    setInterval(function() {
        let currentTime = Date.now();
        let elapsedTime = currentTime - startTime;
        let minutes = Math.floor(elapsedTime / 60000);
        let seconds = Math.floor((elapsedTime % 60000) / 1000);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerDisplay.textContent = minutes + ':' + seconds;
    }, 1000);
});
