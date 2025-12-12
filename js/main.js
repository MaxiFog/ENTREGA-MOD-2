const botonesCompra = document.querySelectorAll(".btn-secondary");
const contenedorCarrito = document.getElementById("Carrito");


botonesCompra.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
});


function agregarAlCarrito(evento) {
    const boton = evento.target;
    const tarjeta = boton.closest(".card-body");

    const titulo = tarjeta.querySelector(".card-title").textContent;
    const precio = tarjeta.querySelector(".precio").textContent;


    const itemsActuales = Array.from(contenedorCarrito.children);


    const itemExistente = itemsActuales.find(item => {
        const tituloEnCarrito = item.querySelector(".titulo-item").textContent;
        return tituloEnCarrito === titulo;
    });


    if (itemExistente) {
        const contador = itemExistente.querySelector(".contador-item");
        let numeroActual = parseInt(contador.textContent);
        contador.textContent = numeroActual + 1; 
    } else {
        crearItemEnCarrito(titulo, precio);
    }
}


function crearItemEnCarrito(titulo, precio) {
    const nuevoElemento = document.createElement("li");

    nuevoElemento.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    nuevoElemento.innerHTML = `
        <div class="ms-2 me-auto">
            <div class="fw-bold titulo-item">${titulo}</div>
            ${precio}
        </div>
        <span class="badge bg-primary rounded-pill contador-item">1</span>
    `;

    contenedorCarrito.appendChild(nuevoElemento);
}