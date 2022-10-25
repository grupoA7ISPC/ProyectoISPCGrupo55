/*CONSIDERACIONES PARA LA VALIDACIÓN DE LOS CAMPOS: 
•Ningún campo puede estar vacío. 
•Estructura de correo electrónico: nombre usuario + @ + servidor + dominio.
•Fecha de nacimiento: +13 años. 
•El nombre de usuario no puede tener espacios, mínimo 4 caracteres. 
•Ambas contraseñas deben coincidir.
•La contraseña debe tener un mínimo de 8 caracteres, un máximo de 16, 1 número, 1 minúscula, 1 mayúscula.
•La casilla de "términos y condiciones" debe estar aceptada. 
*/



const form = document.getElementById('formulario');
//Prevención para que los elementos terminen de cargar antes: 
window.addEventListener('load', ()=>{ 
    form.addEventListener('submit', validaCampos)
})

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const email = document.getElementById('correo');
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');
const fecha = document.getElementById('date');
const checkbox = document.getElementById('checkbox');

//Función para validar cada campo. 
function validaCampos (evento) {
    evento.preventDefault(); //Evitar que el formulario se envíe sin pasar por toda la verificación.
    //Capturar valores ingresados por el usuario. 
    const nombreValor = nombre.value.trim();
    const apellidoValor = apellido.value.trim();
    const usuarioValor = usuario.value.trim();
    const emailValor = email.value.trim();
    const pass1Valor = pass1.value.trim();
    const pass2Valor = pass2.value.trim();
    const fechaValor = fecha.value.trim();
    
    const array1 = [nombreValor, apellidoValor, usuarioValor]; 
    const array2 = [nombre, apellido, usuario];

    for (i in array1) {
        if (!array1[i]) {
            validaFalla(array2[i], 'Campo obligatorio*');
            return;
        } else {
            validaOk(array2[i]);
        }
    }

    // // Validando campo NOMBRE.
    // if(!nombreValor){
    //     validaFalla(nombre, 'Campo obligatorio*')
    //     return;
    // }else{
    //     validaOk(nombre)
    // }

    // // Validando campo APELLIDO.
    // if(!apellidoValor){
    //     validaFalla(apellido, 'Campo obligatorio*')
    //     return;
    // }else{
    //     validaOk(apellido)
    // }

    // // Validando campo USUARIO.
    // if(!usuarioValor){
    //     validaFalla(usuario, 'Campo obligatorio*')
    //     return;
    // }else{
    //     validaOk(usuario)
    // }

    //Validando campo EMAIL.
    if(!emailValor){
        validaFalla(email, 'Campo obligatorio*')
        return;
    }else if(!validaEmail(emailValor)){
        validaFalla(email, 'El email no es valido')
        return;
    }else {
        validaOk(email)
    }

    //Validando campo PASSWORD.
    const patronPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
    if(!pass1Valor){
        validaFalla(pass1, 'Campo obligatorio*')
            return;
    }else if (!pass1Valor.match(patronPass)){ 
        validaFalla(pass1, 'Debe tener entre 8 y 16 caracteres y al  menos una may, una min y un num.')
        return;
    }else {
        validaOk(pass1)
    }

    // validando campo CONFIRMACIÓN PASSWORD. 
    if(!pass2Valor){
        validaFalla(pass2, 'Confirme su contraseña')
        return;
    }else if (pass1Valor !== pass2Valor){
        validaFalla(pass2,'Las contraseñas no coinciden')
        return;
    } else {
        validaOk(pass2)
    }


    //Validando campo FECHA (formato dd/mm/aaaa entre 1900 y fecha actual)
        let fechaMenor= new Date('01/01/1900');
        if(!fechaValor){
            validaFalla(fecha, 'Ingrese su fecha de nacimiento')
        return;
        }
        else if(new Date(fechaValor) > new Date() ) {
            validaFalla(fecha, 'Ingrese una fecha Valida')
            return;  
        } else if (new Date(fechaValor) < fechaMenor){
            validaFalla(fecha, 'Ingrese una fecha Valida')
            return;     
        } else {
            validaOk(fecha)  
        }

    //Validando boton checkbox
    //Falta mostrar mensaje de error****
    if(!checkbox.checked == true){
        console.log('debe aceptar terminos y condiciones')
    }else{
        console.log('chequeo valido ');
    }


    this.submit(); //Enviar el formulario si todo está ok. 
}
    
//Creacion funciones de validación:
const validaFalla = (input,msje) => {
    const inputContainer = input.parentElement
    const aviso = inputContainer.querySelector('p')
    aviso.innerText = msje
    inputContainer.className = 'input-container falla'
    // return;
}

const validaOk = (input,msje) => {
    const inputContainer = input.parentElement
    inputContainer.className = 'input-container ok'
}

const validaEmail = (email) =>{
    return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
}