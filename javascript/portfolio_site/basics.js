document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('confirm_box');
    
    box.addEventListener('click', () => {
        alert('Unsubscribed!');
    });
});

document.getElementById('switchButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});