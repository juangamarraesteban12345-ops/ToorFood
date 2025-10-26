// Seleccionamos todos los productos
const productos = document.querySelectorAll('.producto');
const modal = document.getElementById('modal');
const modalImagen = document.getElementById('modal-imagen');
const modalNombre = document.getElementById('modal-nombre');
const modalPrecio = document.getElementById('modal-precio');
const cerrar = document.querySelector('.cerrar');

// Evento para abrir modal al hacer clic en un producto
productos.forEach(producto => {
    producto.addEventListener('click', () => {
        const img = producto.querySelector('img').src;
        const nombre = producto.querySelector('h3').textContent;
        const precio = producto.querySelector('p').textContent;

        modalImagen.src = img;
        modalNombre.textContent = nombre;
        modalPrecio.textContent = precio;

        modal.style.display = 'flex';
    });
});

// Cerrar el modal
cerrar.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ==== POPIN FLOTANTE ====
const popin = document.getElementById('popin');
const miniVentana = document.getElementById('mini-ventana');
const cerrarVentana = document.getElementById('cerrar-ventana');

popin.addEventListener('click', () => {
    // Alterna entre mostrar y ocultar
    if (miniVentana.classList.contains('oculto')) {
        miniVentana.classList.remove('oculto');
    } else {
        miniVentana.classList.add('oculto');
    }
});

cerrarVentana.addEventListener('click', () => {
    miniVentana.classList.add('oculto');
});

// ==== FORMULARIO DE PEDIDO ====
const formulario = document.getElementById('pedido-form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los valores de los campos
    const producto = document.getElementById('productos').value.trim();
    const kilos = document.getElementById('kilos').value.trim();

    // Mostrar los datos en la consola
    console.log("🛒 Pedido enviado:");
    console.log("Producto:", producto);
    console.log("Kilos:", kilos);

    // Mostrar mensaje en pantalla
    alert(`✅ Pedido enviado:\nProducto: ${producto}\nKilos: ${kilos}`);

    // Limpiar formulario después de enviar
    formulario.reset();
});

