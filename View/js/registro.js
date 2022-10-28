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
    evento.preventDefault(); //Evita que el formulario se envíe sin pasar por toda la verificación.
    //Capturar valores ingresados por el usuario:
    const nombreValor = nombre.value.trim();
    const apellidoValor = apellido.value.trim();
    const usuarioValor = usuario.value.trim();
    const emailValor = email.value.trim();
    const pass1Valor = pass1.value.trim();
    const pass2Valor = pass2.value.trim();
    const fechaValor = fecha.value.trim();
    
    //Array 1: VALORES en NOMBRE, APELLIDO y USUARIO. Salida sencilla. 
    const array1 = [nombreValor, apellidoValor, usuarioValor]; 
    //Array 2: CAMPOS de NOMBRE, APELLIDO y USUARIO. Salida sencilla. 
    const array2 = [nombre, apellido, usuario];

    //Se itera por cada valor y campo, con ayuda de los arreglos UNO(1) y DOS(2), para identificar si NOMBRE, APELLIDO o USUARIO están en blanco: 
    for (i in array1) {
        if (!array1[i]) {
            validaFalla(array2[i], 'Campo obligatorio*');
            return;
        } else {
            validaOk(array2[i]);
        }
    }

    //Validando campo EMAIL. Salida compleja. 
    const patronEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (!emailValor) {
        validaFalla(email, 'Campo obligatorio*');
        return;
    } else if (!emailValor.match(patronEmail)) {
        validaFalla(email, 'El email no es válido');
        return;
    } else {
        validaOk(email);
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

    //Validando campo CONFIRMACIÓN PASSWORD. 
    if(!pass2Valor){
        validaFalla(pass2, 'Confirme su contraseña')
        return;
    }else if (pass1Valor !== pass2Valor){
        validaFalla(pass2,'Las contraseñas no coinciden')
        return;
    } else {
        validaOk(pass2)
    }


    //Validando campo FECHA (formato dd/mm/aaaa entre 1900 y fecha actual). Se valida que la fecha de nacimiento corresponda al menos a 13 años de la fecha actual. 
        //Nuevas instancias:
        let fechaMinima= new Date('01/01/1900'); 
        const fechaNacimiento = new Date (fechaValor); 
        let fechaActual = new Date(); 
        const diferenciaFechas = new Date(
            fechaNacimiento.getUTCFullYear() + 13, 
            fechaNacimiento.getUTCMonth(), 
            fechaNacimiento.getUTCDate()
        );

        if(!fechaValor){
            validaFalla(fecha, 'Ingrese su fecha de nacimiento')
            return;
        } else if(new Date(fechaValor) > new Date() || new Date(fechaValor) < fechaMinima) {
            validaFalla(fecha, 'Ingrese una fecha válida')
            return;   
        } else if (diferenciaFechas >= fechaActual) {
            validaFalla(fecha, "Debes tener al menos 13 años");
            return; 
        } else {
            validaOk(fecha)  
        }

    //Validando botón checkbox
    //Falta mostrar mensaje de error****
    if(!checkbox.checked == true){
        fallaCheckbox();
        return;
    }else{
        validaOk(checkbox);
    }


    this.submit(); //Envía el formulario si todo está ok. 
}

document.getElementById("check-error").style.display = "none";
const fallaCheckbox = () => {
    document.getElementById("check-error").style.display = "flex";
}
    
//Funciones de validación:
const validaFalla = (input,msje) => {
    const inputContainer = input.parentElement
    const aviso = inputContainer.querySelector('p')
    aviso.innerText = msje
    inputContainer.className = 'input-container falla'
}

const validaOk = (input,msje) => {
    const inputContainer = input.parentElement
    inputContainer.className = 'input-container ok'
}

/* no me funcionó.
 function goToLogin(){
    location.href = "login.html";
} */