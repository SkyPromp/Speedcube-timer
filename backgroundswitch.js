let backgroundIndex = 0;
let colorIndex = 0;

function nextBackground() {
    let backgrounds = ["gplaypattern", "triangular", "carbon_fibre", "cloudy-day", "connectwork", "dark-triangles", "footer_lodyas"];
    document.querySelector("body").style.backgroundImage = `url("img/backgrounds/${backgrounds[++backgroundIndex % backgrounds.length]}.png")`;
}

function nextColor() {
    let colors = ["black", "white"];
    document.querySelector("body").style.color = colors[++colorIndex % colors.length];
    document.getElementById("settings").src = `img/settings ${colors[colorIndex % colors.length]}.png`
}