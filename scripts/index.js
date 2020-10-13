/**  
 * Moves the image around according to the screen dimensions 
 * */
function positionImage() {
    var img = document.getElementById("asideImage");
    if (window.innerWidth < 800) {
        var container = document.getElementsByTagName("main")[0];
        img.setAttribute("src", "./images/hero-mobile.jpg");
        container.insertBefore(img, container.children[1]);
    } else {
        var body = document.getElementsByTagName("body")[0];
        img.setAttribute("src", "./images/hero-desktop.jpg");
        body.insertBefore(img, body.children[0].nextSibling);
    }
}

window.onload = () => {
    positionImage();
    show(document.getElementsByTagName("body")[0])
}

window.onresize = () => {
    positionImage();
}

let respuestaContenedor = document.getElementById("respuesta_contenedor");
document.getElementById("spoilearme").addEventListener('click', () => {
    document.getElementById("esperar").style.display = 'none'
    respuestaContenedor.innerHTML = `<p id="respuesta" class="animate__animated animate__bounceIn">Pronto sabrás más sobre la palta dorada</p>`;
})

document.getElementById("esperar").addEventListener('click', () => {
    document.getElementById("spoilearme").style.display = 'none'
    respuestaContenedor.innerHTML = `<p id="respuesta" class="animate__animated animate__bounceIn">Sabía decisión Princesa</p>`;
})

