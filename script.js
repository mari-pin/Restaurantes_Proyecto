document.addEventListener("DOMContentLoaded", function () {
    const destino = document.getElementById("destino");
    const opcionesReserva = document.getElementById("opcionesReserva");
    const datosUsuario = document.getElementById("datosUsuario");
    const reservaForm = document.getElementById("reservaForm");

    destino.addEventListener("change", function () {
        if (destino.value) {
            opcionesReserva.style.display = "block";
        } else {
            opcionesReserva.style.display = "none";
            datosUsuario.style.display = "none";
        }
    });

    opcionesReserva.addEventListener("input", function () {
        if (document.getElementById("fecha").value && document.getElementById("hora").value) {
            datosUsuario.style.display = "block";
        }
    });

    reservaForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("¡Reserva completada con éxito!");
        reservaForm.reset();
        opcionesReserva.style.display = "none";
        datosUsuario.style.display = "none";
    });
});
