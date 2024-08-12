document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('confirm_box');
    
    box.addEventListener('click', () => {
        alert('Unsubscribed!');
    });
});