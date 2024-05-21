let etiqueta = document.getElementById('formRegistro')
console.log(etiqueta)

let formRegistro=document.getElementById('formRegistro');

let validarDatos=(event)=>{
event.preventDefault();
let validacion= true;
let inputNombre = document.querySelector("#nombrePaciente");
if(inputNombre.value === ""){
    let divError=document.querySelector("#errorNombre")
    divError.textContent = "escribe un nombre!"
    inputNombre.classList.add("error")
    validacion= false;
}
let inputApellido = document.querySelector("#apellidoPaciente");
    if(inputApellido.value === ""){
        let divError=document.querySelector("#errorApellido")
        divError.textContent = "escribe tu Apellido!"
        inputApellido.classList.add("error")
        validacion= false;
}
let inputEmail = document.querySelector("#emailPaciente");
    if(inputEmail.value === ""){
        let divError=document.querySelector("#errorEmail")
        divError.textContent = "escribe tu email!"
        inputEmail.classList.add("error")
        validacion= false;
}
let inputPassword = document.querySelector("#contraseña");
    if(inputEmail.value === ""){
        let divError=document.querySelector("#errorPassworrd")
        divError.textContent = "escribe una contraseña!"
        inputEmail.classList.add("error")
        validacion= false;
}
let inputDni = document.querySelector("#dniPaciente");
    if(inputDni.value === ""){
        let divError=document.querySelector("#errorDni")
        divError.textContent = "escribe tu DNI!"
        inputDni.classList.add("error")
        validacion= false;
}
let select = document.getElementById('generoPaciente');
        if (select.value === '') {
            
            validacion = false;
            
        }   
 let checkbox = document.getElementById('miCheckbox');
        if (!checkbox.checked) {
            
            validacion = false;
            
        }     
}

formRegistro.addEventListener("submit",validarDatos)