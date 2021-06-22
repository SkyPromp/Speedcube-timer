function preload(){
    for (let image of backgrounds){
        let link = document.createElement("link");
        link.innerHTML = `<link rel="preload" href="img/backgrounds/${image}.png" as="image">`
        document.body.appendChild(link);
    }
}


preload()
