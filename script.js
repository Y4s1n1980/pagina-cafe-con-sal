// Función para resaltar el enlace activo
function highlightActiveLink() {
    const currentPage = window.location.pathname; // Obtiene la ruta de la URL actual

    // Obtiene todos los enlaces de navegación
    const navLinks = document.querySelectorAll('.nav-link');

    // Recorre los enlaces y verifica si la URL actual coincide con el atributo href
    navLinks.forEach((link) => {
        const linkHref = link.getAttribute('href');
        if (linkHref && currentPage.endsWith(linkHref)) {
            link.classList.add('active'); // Agrega la clase "active" al enlace correspondiente
        } else {
            link.classList.remove('active'); // Elimina la clase "active" de otros enlaces
        }
    });
}

// Llama a la función para resaltar el enlace activo cuando se carga la página
highlightActiveLink();
