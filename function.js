// Abrir el panel izquierdo según la opción presionada
function abrirModoPanel(modo) {
    const panelIzq = document.getElementById('panel-izquierdo');
    const contenidoPrincipal = document.getElementById('contenido-principal');
    const secLogin = document.getElementById('seccion-login');
    const secRegistro = document.getElementById('seccion-registro');

    if (modo === 'login') {
        secLogin.classList.remove('oculta');
        secRegistro.classList.add('oculta');
    } else if (modo === 'registro') {
        secRegistro.classList.remove('oculta');
        secLogin.classList.add('oculta');
    }

    // Desplegar panel y aplicar desenfoque al fondo
    panelIzq.classList.add('activo');
    contenidoPrincipal.classList.add('modo-blur');
}

// Cerrar paneles y remover el desenfoque
function cerrarPaneles() {
    const todosPaneles = document.querySelectorAll('.panel-lateral');
    const contenidoPrincipal = document.getElementById('contenido-principal');

    todosPaneles.forEach(panel => panel.classList.remove('activo'));
    contenidoPrincipal.classList.remove('modo-blur');
}

// Carga de imágenes aleatorias
document.addEventListener('DOMContentLoaded', () => {
    const catalogoFotos = [
        'photo/1.jpg',
        'photo/2.jpg',
        'photo/3.jpg',
        'photo/4.jpg',
        'photo/5.jpg',
        'photo/6.jpg',
        'photo/7.jpg',
        'photo/8.jpg',
        'photo/9.jpg',
        'photo/10.jpg'
    ];

    function obtenerFotosAleatorias(array, cantidad) {
        const copia = [...array];
        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia.slice(0, cantidad);
    }

    const fotosSeleccionadas = obtenerFotosAleatorias(catalogoFotos, 4);
    fotosSeleccionadas.forEach((ruta, index) => {
        const imgElement = document.getElementById(`img-${index + 1}`);
        if (imgElement) imgElement.src = ruta;
    });
});