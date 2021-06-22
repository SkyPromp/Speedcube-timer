// Define empty scramble
let scramble = "";
let time = 0;

// Get starting scramble
fetch(`cgi-bin/transfer.cgi?scramble=&time=`)
    .then(response => response.json()) // convert response to json
    .then(data => {
        scramble = data
        document.getElementById("scramble").innerHTML = data
    });

fetch(`cgi-bin/removeLL.cgi?`)
    .then(response => response.json()) // convert response to json
    .then(() => console.log("last line removed")
    );


// Define variable to check if the timer is running
let running = false;

window.addEventListener("keyup", checkKeyUp, false); // Listens for key releases and calls checkKeyUp function

function checkKeyUp(key) {
    if (key.keyCode === 32) { // Check if the key is the spacebar
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        if (!(running)) {
            running = true;
            interval = window.setInterval(stopwatch, rate); // Call stopwatch every millisecond
        } else {
            running = false;
        }
    } else if (key.keyCode === 82) { // Check if the key is r
        fetch(`cgi-bin/removeLL.cgi?`)
            .then(response => response.json()) // convert response to json
            .then(() => console.log("last line removed")
            );
    }
}

window.addEventListener("keydown", checkKeyDown, false); // Listens for key releases and calls checkKeyDown function

function checkKeyDown(key) {
    if (key.keyCode === 32) { // Check if the key is the spacebar
        window.clearInterval(interval);
        if (running) {
            time = milliseconds + 1000 * seconds + 60000 * minutes + 3600000 * hours;
            fetch(`cgi-bin/transfer.cgi?scramble=${scramble}&time=${time}`)
                .then(response => response.json()) // convert response to json
                .then(data => {
                    scramble = data;
                });
            document.getElementById("scramble").innerHTML = scramble
        }
    }
}
