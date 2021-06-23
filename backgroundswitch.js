// List of all the background filenames (without the file extension)
let backgrounds = ["gplaypattern", "triangular", "carbon_fibre", "cloudy-day", "connectwork", "dark-triangles", "footer_lodyas"];

// Indexes for keeping track on what image or color the user is
let backgroundIndex = 0;
let colorIndex = 0;

function nextBackground() {
    document.querySelector("body").style.backgroundImage = `url("img/backgrounds/${backgrounds[++backgroundIndex % backgrounds.length]}.png")`;
    /*TODO:
    send backgroundIndex % backgrounds.length to settings.csv
     */
}

function nextColor() {
    let colors = ["black", "white"];
    document.querySelector("body").style.color = colors[++colorIndex % colors.length];
    document.getElementById("settings").src = `img/settings ${colors[colorIndex % colors.length]}.png`;
    /*TODO:
    send colorIndex % colors.length to settings.csv
     */
}
