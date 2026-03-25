function comprar() {
    alert("Producto agregado 🛒");
}

let carrito = [];


if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
}


function comprar(nombre, precio) {
    const producto = { nombre, precio };

    carrito.push(producto);

    // Guardar en memoria
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(nombre + " agregado al carrito 🛒");

    actualizarContador();
}


function actualizarContador() {
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        contador.textContent = carrito.length;
    }
}


function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total");

    if (!lista || !total) return;

    lista.innerHTML = "";
    let suma = 0;

    carrito.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item.nombre + " - $" + item.precio;

        lista.appendChild(li);
        suma += item.precio;
    });

    total.textContent = "Total: $" + suma;
}


function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
    actualizarContador();
}


document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();
    mostrarCarrito();
});
function pagar() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío 😢");
        return;
    }

    alert("Pago realizado con éxito 💳✅");

    vaciarCarrito();
}