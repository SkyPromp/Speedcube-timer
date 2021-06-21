// Define millisecond interval rate (needs to be above 0 and a natural power of a divisor of 1000)
let rate = 4;

// Define variables to hold time values
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

// Define variable to hold setInterval() function
let interval = null;

function stopwatch(){
    // calculate next time
    milliseconds += rate;
    if (milliseconds === 1000){
        milliseconds = 0;
        seconds++;
        if (seconds === 60){
            seconds = 0;
            minutes++;
            if (minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    }

    // Get leading zero's function
    const zeroPad = (num, places) => String(num).padStart(places, '0');

    // Display time
    if (hours !== 0){
        document.getElementById("display").innerHTML = `${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${seconds}.${zeroPad(milliseconds, 3)}`;
    }else if (minutes !== 0){
        document.getElementById("display").innerHTML = `${zeroPad(minutes, 2)}:${seconds}.${zeroPad(milliseconds, 3)}`;
    } else {
        document.getElementById("display").innerHTML = `${seconds}.${zeroPad(milliseconds, 3)}`;
    }
}
