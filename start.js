window.addEventListener("keyup", checkKeyPress, false); // Listens for key releases and calls checkKeyPress function

function checkKeyPress(key){
    if (key.keyCode === 32){
        alert("spatie is ingedrukt")
    }
}