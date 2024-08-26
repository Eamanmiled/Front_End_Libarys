// clock function^
function updateClock() {
    const now = new Date();


    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const timeString = `${hours}:${minutes}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();
// clock function^

//side bar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
//side bar