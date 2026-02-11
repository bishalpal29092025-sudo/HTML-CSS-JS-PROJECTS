const time = document.querySelector('#time');
const date = document.querySelector('#date');
const toggle = document.querySelector('#toggleFormat');

let is24Hours = true;

function updateClock(){
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();


    let ampm = "";

    if(!is24Hours){
        ampm = hours >= 12 ? " PM" : " AM";
        hours = hours % 12 || 12;
    }

    const formattedTime =
    String(hours).padStart(2, '0') + ":" +
    String(minutes).padStart(2, '0') + ":" +
    String(seconds).padStart(2, '0') + ampm;

    time.textContent = formattedTime;


    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
    date.textContent = now.toLocaleDateString(undefined, options);
}

toggle.addEventListener('click', ()=> {
    is24Hour = !is24Hour;
    toggleBtn.textContent = is24Hour
    ? "Switch to 12-Hour Format"
    : "Switch to 24-Hour Format";
});

// Update every second
setInterval(updateClock, 1000);
updateClock();