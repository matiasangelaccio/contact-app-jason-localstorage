// funciones
const guardarContacto =(local, contacto) =>{
    local.setItem(contacto.id,JSON.stringify(contacto))
    window.location.href = `/`
}
const cargarContactos = (local, parentNode) =>{
    let claves = Object.keys(local)
for(clave of claves){
  let contacto = JSON.parse(local.getItem(clave))
  crearContacto(parentNode, contacto, local)
}
}
const crearContacto = (parentNode, contacto, local) =>{
let divContacto = document.createElement(`div`)
let nombreContacto = document.createElement(`h3`)
let numeroContacto = document.createElement(`p`)
let direccionContacto = document.createElement(`p`)
let iconoBorrar = document.createElement(`span`)
nombreContacto.innerHTML= contacto.nombre;
numeroContacto.innerHTML= contacto.numero;
direccionContacto.innerHTML= contacto.direccion;
iconoBorrar.innerHTML = `delete_forever`

divContacto.classList.add(`tarea`)
iconoBorrar.classList.add(`material-icons`, `icono`)

iconoBorrar.onclick = () =>{
    local.removeItem(contacto.id)
    window.location.href = `/`
}

divContacto.appendChild(nombreContacto)
divContacto.appendChild(numeroContacto)
divContacto.appendChild(direccionContacto)
divContacto.appendChild(iconoBorrar)

parentNode.appendChild(divContacto)
}



const nombre = document.querySelector(`.nombre`)
const numero = document.querySelector(`.numero`)
const direccion = document.querySelector(`.direccion`)
const btnAgregarTarea = document.querySelector(`.btn-agregar-tarea`)

const listadoTareas = document.querySelector(`.listado-tareas`)
const local = window.localStorage

btnAgregarTarea.onclick = () =>{
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
 guardarContacto(local, contacto);
}
cargarContactos(local, listadoTareas);