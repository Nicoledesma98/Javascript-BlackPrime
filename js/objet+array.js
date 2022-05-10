const cuentas = [];
const newPrestamo = () => {
  let getTitularComp = document.getElementById("Saldo");
  let nombre = document.getElementById("inputnombre").value;
  let apellido = document.getElementById("inputapellido").value;
  let calle = document.getElementById("inputcalle").value;
  let telefono = document.getElementById("inputtelefono").value;
  let dni = document.getElementById("inputdni").value;
  let nuevoPrestamo = document.createElement("div");
  let prestamo = document.getElementById("inputmonto").value;
  const cuotas = document.getElementById("inputcuotas").value;
  let interes = parseFloat((prestamo * 3.5) / 100);
  const cuotaconinteres = prestamo / cuotas + interes;
  let total = cuotaconinteres * cuotas;
  nuevoPrestamo.className = 'col-md-12';
  nuevoPrestamo.innerHTML = `<div id = plata><h2>${nombre} ${apellido}</h2><p>DNI: ${dni}</p><p>telefono: ${telefono}</p> <p>Direccion:${calle}</p><p>Monto: ${prestamo}</p><p>Cantidad de Cuotas: ${cuotas}</p> <p>Interes por Cuota: ${interes}</p><p>Total: ${total}</p></div>`;
  getTitularComp.appendChild(nuevoPrestamo);
  function infoPrestamo(titular, apellidotitular, documento, celular, direccion, monto, cuota, pagar) {
    this.titular = nombre;
    this.apellidotitular = apellido;
    this.documento = dni;
    this.celular = telefono;
    this.direccion = calle;
    this.monto = prestamo;
    this.cuota = cuotaconinteres;
    this.pagar = total;
  }
  cuentas.push(new infoPrestamo({ nombre: nombre, apellido: apellido, documento: dni, celular: telefono, direccion: calle, monto: prestamo, cuota: cuotaconinteres, pagar: total }))
  nuevoStorange();
};

let nuevoStorange = () => {
  let infoPrestamo = JSON.stringify(cuentas);
  localStorage.setItem("nuevos prestamos", infoPrestamo);
}
const clearList = () => {
  let dinero = document.getElementById("plata");
  dinero.remove()
  Swal.fire({
    title: '¿Estas seguro de borrar el prestamo?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borralo!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Borrado!',
        'Tu prestamo ya no existe!.',
        'Perfecto'
      )
    }
  })
};
function validarCampos() {
  return (
    document.getElementById("inputnombre").value != "" &&
    document.getElementById("inputapellido").value != "" &&
    parseFloat(document.getElementById("inputmonto").value) > 0 &&
    parseFloat(document.getElementById("inputdni").value) > 0 &&
    parseFloat(document.getElementById("inputcuotas").value) > 0 &&
    parseFloat(document.getElementById("inputtelefono").value) > 0 &&
    document.getElementById("inputcalle").value != ""
  );
}