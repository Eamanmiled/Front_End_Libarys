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

// function updateDate() {
//   const now = new Date();

//   const day = String(now.getHours()).padStart(2, '0');
//   const month = String(now.getMinutes()).padStart(2, '0');

//   const timeString = `${hours}:${minutes}`;
//   document.getElementById('clock').textContent = timeString;
// }

//side bar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }
//side bar


/////////////////////chat shit will fix later/////////////////////////////////////////////
function showNewButtons(type) {
  // Fade out the original page content
  document.getElementById("main").classList.add("fade-out");
  document.querySelector(".button-container").classList.add("fade-out");

  // Hide both sets of buttons initially
  document.getElementById("in-buttons").style.display = 'none';
  document.getElementById("out-buttons").style.display = 'none';

  // Depending on the type ('in' or 'out'), show the corresponding set of buttons
  if (type === 'in') {
      const inButtons = document.getElementById('in-buttons');
      inButtons.style.display = 'flex';
      setTimeout(() => {
          inButtons.classList.add("fade-in");
      }, 10);
  } else if (type === 'out') {
      const outButtons = document.getElementById('out-buttons');
      outButtons.style.display = 'flex';
      setTimeout(() => {
          outButtons.classList.add("fade-in");
      }, 10);
  }
}