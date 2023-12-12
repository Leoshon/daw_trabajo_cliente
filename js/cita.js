let citas = [];
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("citas")) {
    citas = JSON.parse(localStorage.getItem("citas"));
  }
  if (localStorage.getItem("id")) {
    id = JSON.parse(localStorage.getItem("id"));
  }
  renderCitas(citas);
});

function rowForCita(cita) {
  const tr = document.createElement("tr");
  const btnbaja = document.createElement("button");
  const btnmod = document.createElement("button");
  btnbaja.classList.add("baja");
  btnmod.classList.add("mod");
  btnbaja.dataset.id = cita.id;
  btnmod.dataset.id = cita.id;
  btnbaja.textContent = "Baja";
  btnmod.textContent = "Modificar";

  function addCell(text) {
    const td = document.createElement("td");
    td.textContent = text;
    tr.appendChild(td);
  }

  addCell(cita.nombre);
  addCell(cita.apellidos);
  addCell(cita.telefono);
  addCell(cita.nacimiento);
  addCell(cita.dni);
  addCell(cita.observaciones);
  addCell(cita.fecha);
  addCell(cita.hora);
  tr.appendChild(btnbaja);
  tr.appendChild(btnmod);
  return tr;
}
function renderCitas(citas) {
  const tabla = document.querySelector("#tabla");
  const tbody = document.querySelector("#tbody");
  if (citas.length === 0) {
    tabla.innerHTML = "<center><h1>No hay citas</h1></center>";
    return;
  }
  for (const cita of citas) {
    const row = rowForCita(cita);
    tbody.appendChild(row);
  }
  tbody.addEventListener("click", (e) => {
    if (e.target.classList.contains("baja")) {
      citas = citas.filter((cita) => cita.id != e.target.dataset.id);
      localStorage.setItem("citas", JSON.stringify(citas));
      tbody.innerHTML = "";
      renderCitas(citas);
    } else if (e.target.classList.contains("mod")) {
      let id = e.target.dataset.id;
      localStorage.setItem("id", JSON.stringify(id));
      window.location.href = "modificarcita.html";
    }
  });
}
