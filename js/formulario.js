const formulario = document.querySelector("#formulario");
const fecha = document.querySelector("#fecha");
const hora = document.querySelector("#hora");
const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#apellidos");
const telefono = document.querySelector("#telefono");
const nacimiento = document.querySelector("#nacim");
const observaciones = document.querySelector("#observaciones");
const dni = document.querySelector("#dni");
const btn = document.querySelector("#btn");
btn.addEventListener("click", guardarCita);
let datos = [];

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("citas")) {
    datos = JSON.parse(localStorage.getItem("citas"));
  }
});
function guardarCita(e) {
  e.preventDefault();

  if (
    validarDatos(
      fecha.value,
      nombre.value,
      apellidos.value,
      telefono.value,
      nacimiento.value,
      dni.value,
      hora.value
    )
  ) {
    const cita = {
      id: Date.now(),
      nombre: nombre.value,
      apellidos: apellidos.value,
      telefono: telefono.value,
      nacimiento: nacimiento.value,
      observaciones: observaciones.value,
      fecha: fecha.value,
      hora: hora.value,
      dni: dni.value,
    };

    alert("Cita guardada");
    formulario.reset();
    datos.push(cita);
    localStorage.setItem("citas", JSON.stringify(datos));
  }
}
