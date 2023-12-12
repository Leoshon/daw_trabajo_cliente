let id = "";
let citas = [];
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
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("id")) {
    id = JSON.parse(localStorage.getItem("id"));
  }
  if (localStorage.getItem("citas")) {
    citas = JSON.parse(localStorage.getItem("citas"));
  }

  citas.filter((cita) => {
    if (cita.id == id) {
      fecha.value = cita.fecha;
      hora.value = cita.hora;
      nacimiento.value = cita.nacimiento;
      nombre.value = cita.nombre;
      apellidos.value = cita.apellidos;
      telefono.value = cita.telefono;
      dni.value = cita.dni;
      observaciones.value = cita.observaciones;
    }
  });
});
btn.addEventListener("click", modificarCita);

function modificarCita(e) {
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
      id: id,
      nombre: nombre.value,
      apellidos: apellidos.value,
      telefono: telefono.value,
      nacimiento: nacimiento.value,
      dni: dni.value,
      fecha: fecha.value,
      hora: hora.value,
      observaciones: observaciones.value,
    };
    //usando el spread operator agrego la cita modificada al array de citas
    citas = [...citas.filter((cita) => cita.id != id), cita];

    localStorage.setItem("citas", JSON.stringify(citas));
    alert("Cita modificada correctamente");
    window.location.href = "consultacitas.html";
  }
}
