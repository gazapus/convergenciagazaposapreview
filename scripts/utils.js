/**
 * @fileoverview useful functions to complete the frontendmentor.io challenge
 * @author  Cristian Villafañe <cristianv129@hotmail.com>
*/

/**  
 * Make visible an element
 * @param {element} element element to make visible
 * */
function show(element) {
    element.classList.remove("hidden");
}

/**  
 * Make invisible an element
 * @param {element} element element to make invisible
 * */
function hide(element) {
    element.classList.add("hidden");
}

function desvanecer(elemento, tiempo, callback, opacidadActual = 1) {
    if(opacidadActual > 0) {
        opacidadActual = opacidadActual - 100 / tiempo;
        elemento.style.opacity = opacidadActual;
        setTimeout(() => desvanecer(elemento, tiempo, callback, opacidadActual), 50)
    } else {
        setTimeout(callback, 1000)
    }
}

function aparecer(elemento, tiempo, callback, opacidadActual = 0) {
    if(opacidadActual < 1) {
        opacidadActual = opacidadActual + 100 / tiempo;
        elemento.style.opacity = opacidadActual;
        setTimeout(() => aparecer(elemento, tiempo, callback, opacidadActual), 50)
    } else {
        setTimeout(callback, 1000);
    }
}

function reaparecer(elemento, tiempo, callback, brillo = 0) {
   if(brillo < 1) {
       brillo = brillo + 100 / tiempo;
       elemento.style.webkitFilter  = `brightness(${brillo})`;
       setTimeout(() => reaparecer(elemento, tiempo, callback, brillo), 100);
   } else {
        setTimeout(callback, 1000);
   }
}