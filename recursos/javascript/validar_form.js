let etiqueta = document.getElementById('formContacto')
console.log(etiqueta)

let formContacto=document.getElementById('formContacto');

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
let inputDni = document.querySelector("#dniPaciente");
    if(inputDni.value === ""){
        let divError=document.querySelector("#errorDni")
        divError.textContent = "escribe tu DNI!"
        inputDni.classList.add("error")
        validacion= false;
}
let select = document.getElementById('esPaciente');
        if (select.value === '') {
            
            validacion = false;
            
        }
let radios = document.getElementsByName('mutualPaciente');
        let radioChecked = false;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                radioChecked = true;
                break;
            }
        }
        if (!radioChecked) {
            
            validacion = false;
            
        }   
 let checkbox = document.getElementById('miCheckbox');
        if (!checkbox.checked) {
            
            validacion = false;
            
        }     
}

formContacto.addEventListener("submit",validarDatos)

