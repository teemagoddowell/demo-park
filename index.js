 
document.addEventListener('DOMContentLoaded', function() {
    const parkingForm = document.getElementById('parkingForm');

    parkingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const carPlate = document.getElementById('carPlate').value.trim();

        if (carPlate !== '') {
            sessionStorage.setItem('carPlate', carPlate);
            window.location.href = 'parking.html';
        } else {
            alert('Please enter your car plate number.');
        }
    });
});
