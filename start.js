// Define variable to check if the timer is running
let running = false;

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
    }
}

window.addEventListener("keydown", checkKeyDown, false); // Listens for key releases and calls checkKeyDown function

function checkKeyDown(key){
    if (key.keyCode === 32){ // Check if the key is the spacebar
        window.clearInterval(interval);
    }
}
