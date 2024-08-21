document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('confirm_box');
    
    box.addEventListener('click', () => {
        alert('Unsubscribed from annoying spam!');
    });
});

document.getElementById('switchButton').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

function showContent(pageId) {
    var contents = document.querySelectorAll('.page-content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });
    var selectedContent = document.getElementById(pageId);
    selectedContent.style.display = 'block';
}
showContent('home');