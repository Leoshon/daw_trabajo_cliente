function validarDatos(
  fecha,
  nombre,
  apellidos,
  telefono,
  nacimiento,
  dni,
  horaCita
) {
  //se crean objetos de tipo Date para poder comparar las fechas
  let fechacita = new Date(fecha);
  let fechanacim = new Date(nacimiento);
  //14 años en milisegundos
  const anios = 441763200000;
  //Validar horario de la cita
  let hora = horaCita.split(":");
  let hrs = parseInt(hora[0]);
  let mnts = parseInt(hora[1]);
  //Validar DNI usando expresiones regulares
  const regex = /^[0-9]{8}[A-Z]$/i;

  if (
    nombre === "" ||
    apellidos === "" ||
    telefono === "" ||
    nacimiento === "" ||
    dni === "" ||
    fecha === "" ||
    horaCita === ""
  ) {
    alert("Datos marcados con *  son obligatorios");
    return;
  } else if (hrs < 10 || (hrs >= 19 && mnts > 0)) {
    alert("La hora de la cita debe estar entre las 10:00 y las 19:00");
    return;
  } else if (isNaN(telefono)) {
    alert("El telefono debe ser un numero");
    return;
  } else if (
    /* dni.length != 9 ||
    isNaN(dni.substr(0, 8)) ||
    !isNaN(dni.substr(8, 1)) */
    !regex.test(dni)
  ) {
    alert("El dni debe tener 8 numeros y una letra");
    return;
  } else if (fechanacim > Date.now() - anios) {
    alert("No atendemos a menores de 14 años");
    return;
  } else if (fechacita < Date.now()) {
    alert("La cita debe ser para una fecha posterior a hoy");
    return;
  }

  return true;
}
