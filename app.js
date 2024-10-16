function openFullscreen() {
    const elem = document.documentElement; // Usa el elemento raíz
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari y Opera
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
        elem.msRequestFullscreen();
    }
}

// Llama a esta función cuando el usuario acceda a la página
window.addEventListener('load', () => {
    openFullscreen(); // Esto intentará abrir en pantalla completa
});
