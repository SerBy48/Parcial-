setTimeout(function() {
    window.location.href = "index.html";
}, 3200);

function startCountdown() {
    var count = 3;
    var timerElement = document.getElementById('timer');
  
    var countdown = setInterval(function() {
      count--;
      timerElement.textContent = count;
  
      if (count <= 0) {
        clearInterval(countdown);
        timerElement.textContent = 'Redirigiendo...';
      }
    }, 1000);
  }
  window.onload = function() {
    startCountdown();
  };

  