const newPrestamoModal = () => {
    let getTitularComp = document.getElementById("Saldo");
    let nombreM = document.getElementById("inputnombre").value;
    let apellidoM = document.getElementById("inputapellido").value;
    let calleM = document.getElementById("inputcalle").value;
    let telefonoM = document.getElementById("inputtelefono").value;
    let dniM = document.getElementById("inputdni").value;
    let nuevoPrestamoM = document.createElement("div");
    let prestamoM = document.getElementById("inputmonto").value;
    const cuotasM = document.getElementById("inputcuotas").value;
    const cuotaconinteres = prestamo / cuotas + interes;
    let totalM = cuotaconinteres * cuotas;
    nuevoPrestamoM.className = 'col-md-12';
    nuevoPrestamoM.innerHTML = `<div id = plata><h2>${nombreM} ${apellidoM}</h2><p>DNI: ${dniM}</p><p>telefono: ${telefonoM}</p> <p>Direccion:${calleM}</p><p>Monto: ${prestamoM}</p><p>Cantidad de Cuotas: ${cuotasM}</p></p><p>Total: ${totalM}</p></div>`;
    getTitularComp.appendChild(nuevoPrestamoM);
    
    }
let modal1 = document.getElementById("listamodal");
fetch ("./Prestamos.json")
.then( (res) =>res.json() )
.then ((data) => {
data.forEach ((productos) => {
    const li = document.createElement ("li")
    li.innerHTML = `<ul> <li>Nombre y apellido:${productos.nameLastname}</li>
               <li>Dni: ${productos.dni}</li>
               <li>telefono: ${productos.telefono}</li>
               <li>Calle: ${productos.calle}</li>
               <li>Prestamo: ${productos.prestamo}</li>
               <li>Cuotas: ${productos.cuotas}</li>
               <li>Total: ${productos.total}</li>
               </ul>
               <br> `
               modal1.append(li)
})
})
