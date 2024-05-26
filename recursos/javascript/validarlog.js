let etiqueta = document.getElementById('formLogin')
console.log(etiqueta)

let formLogin=document.getElementById('formLogin');
let validarDatos=(event)=>{
    event.preventDefault();
    let validacion= true;

let inputDni = document.querySelector("#dniPaciente");
    if(inputDni.value === ""){
        let divError=document.querySelector("#errorDni")
        divError.textContent = "escribe tu DNI!"
        inputDni.classList.add("error")
        validacion= false;
    }
let inputEmail = document.querySelector("#emailPaciente");
    if(inputEmail.value === ""){
        let divError=document.querySelector("#errorEmail")
        divError.textContent = "escribe tu email!"
        inputEmail.classList.add("error")
        validacion= false;
}
let inputPassword = document.querySelector("#password");
    if(inputEmail.value === ""){
        let divError=document.querySelector("#errorPassword")
        divError.textContent = "escribe una contraseña!"
        inputPassword.classList.add("error")
        validacion= false;
}
        
}
formLogin.addEventListener("submit",validarDatos)