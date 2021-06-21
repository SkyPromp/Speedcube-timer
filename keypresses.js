// Define variable to check if the timer is running
let running = false;

// Define empty scrable
let scramble = "";

window.addEventListener("keyup", checkKeyUp, false); // Listens for key releases and calls checkKeyUp function

function checkKeyUp(key){
    if (key.keyCode === 32){ // Check if the key is the spacebar
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        if (!(running)){
            running = true;
            interval = window.setInterval(stopwatch, rate); // Call stopwatch every millisecond
        } else {
            running = false;
        }
    } else if (key.keyCode === 82){ // Check if the key is r
        /*TODO:
        *  remove newest line from text file
        */
    }
}

window.addEventListener("keydown", checkKeyDown, false); // Listens for key releases and calls checkKeyDown function

function checkKeyDown(key){
    if (key.keyCode === 32){ // Check if the key is the spacebar
        window.clearInterval(interval);
        if (running){
            let time = milliseconds + 1000*seconds + 60000*minutes + 3600000*hours;

            fetch(`cgi-bin/transfer.cgi?scramble=&time=`)
            .then(response => response.json()) // convert response to json
            .then(data => {
                scramble = data["scramble"];
            });
            document.getElementById("scramble").innerHTML = scramble
        }
    }
}
