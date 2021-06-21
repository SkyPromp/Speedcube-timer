window.addEventListener("keyup", checkKeyPress, false); // Listens for key releases and calls checkKeyPress function

function checkKeyPress(key){
    if (key.keyCode === 32){ // Check if the key is the spacebar
        let timer = new StopWatch();
        window.setInterval(timer.stopwatch, 1); // Call stopwatch every millisecond
    }
}