document.addEventListener('DOMContentLoaded', function() {
    const abrirMenu = document.querySelector('.abrirMenu');
    const cerrarMenu = document.querySelector('.cerrarMenu');
    const contenedorList = document.querySelector('.contenedorList');

    function toggleMenu() {
        contenedorList.classList.toggle('menuAbierto');
    }

    if (abrirMenu && cerrarMenu && contenedorList) {
        abrirMenu.addEventListener('click', toggleMenu);
        cerrarMenu.addEventListener('click', toggleMenu);
    } else {
        console.error("Uno o más elementos no se encontraron en el DOM");
    }

    const Links_Menu = document.querySelectorAll('.contenedorList a[href^="#"]');
    Links_Menu.forEach(link => {
        link.addEventListener('click', function() {
            contenedorList.classList.remove('menuAbierto');
        });
    });
});