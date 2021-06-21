let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

function stopwatch(){
    // calculate next time
    milliseconds++;
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


window.setInterval(stopwatch, 1); // Call stopwatch every millisecond