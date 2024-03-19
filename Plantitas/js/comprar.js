document.addEventListener('DOMContentLoaded', function() {
    const comprarBtn = document.getElementById('comprarBtn');

    comprarBtn.addEventListener('click', function() {
        window.location.href = 'login.html';
    });
});