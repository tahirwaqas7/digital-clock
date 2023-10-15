let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    hrs.innerHTML = hours;
    min.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    sec.innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // Display AM or PM
    document.getElementById("ampm").innerHTML = ampm;
}, 1000);
