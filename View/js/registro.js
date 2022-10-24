/*CONSIDERACIONES PARA LA VALIDACIÓN DE LOS CAMPOS: 
•Ningún campo puede estar vacío. 
•Estructura de correo electrónico: nombre usuario + @ + servidor + dominio.
•Fecha de nacimiento: +13 años. 
•El nombre de usuario no puede tener espacios, mínimo 4 caracteres. 
•Ambas contraseñas deben coincidir.
•La contraseña debe tener un mínimo de 8 caracteres, un máximo de 16, 1 número, 1 minúscula, 1 mayúscula.
•La casilla de "términos y condiciones" debe estar aceptada. 
*/



//window load para que todos los recursos terminen de cargar antes
window.addEventListener('load', ()=>{ 
//capturarando elementos del html mediante ID para interactuar con el DOM
const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const usuario = document.getElementById('usuario');
const email = document.getElementById('correo');
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');
const fecha = document.getElementById('date');
const checkbox = document.getElementById('checkbox');


   
    form.addEventListener('submit', (e)=>{
        //preventDefault cancela el evento por defecto en este caso del form
        e.preventDefault();
        validaCampos()
        
    })
    

        //creacion de funcion para validar cada campo
        const validaCampos = ()=> {
            //capturar valores ingresados por el usuario
            let nombreValor = nombre.value.trim();
            let apellidoValor = apellido.value.trim();
            const usuarioValor = usuario.value.trim();
            const emailValor = email.value.trim();
            const pass1Valor = pass1.value.trim();
            const pass2Valor = pass2.value.trim();
            const fechaValor = fecha.value.trim();
            

            // validando campo nombre 
            // (!nombreValor) equivale a (nombreValor === '') para los campos vacios
            if(!nombreValor){
                validaFalla(nombre, 'Campo obligatorio*')
            }else{
                validaOk(nombre)
            }


            // validando campo apellido
            if(!apellidoValor){
                validaFalla(apellido, 'Campo obligatorio*')
            }else{
                validaOk(apellido)
            }


            // validando campo usuario
            if(!usuarioValor){
                validaFalla(usuario, 'Campo obligatorio*')
            }else{
                validaOk(usuario)
            }


            // validando campo email
            if(!emailValor){
                validaFalla(email, 'Campo obligatorio*')
            }else if(!validaEmail(emailValor)){
                validaFalla(email, 'El email no es valido')
                
            }else {
                validaOk(email)
            }

            // validando campo password
            const patronPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

            if(!pass1Valor){
                validaFalla(pass1, 'Campo obligatorio*')
           
            }else if (!pass1Valor.match(patronPass)){ 
             validaFalla(pass1, 'Debe tener entre 8 y 16 caracteres y al  menos una may, una min y un num.')
            }else {
                validaOk(pass1)
            }


            // validando campo confirmacion password
             if(!pass2Valor){
                     validaFalla(pass2, 'Confirme su contraseña')
            }else if (pass1Valor !== pass2Valor){
                     validaFalla(pass2,'Las contraseñas no coinciden')
             }else {
                     validaOk(pass2)
             }


            // validando campo confirmacion fecha (este codigo valida fechas en formato dd/mm/aaaa entre 1900 y fecha actual)
             let fechaMenor= new Date('01/01/1900');
             if(!fechaValor){
                validaFalla(fecha, 'Ingrese su fecha de nacimiento')
             }

             else if(new Date(fechaValor) > new Date() ) {
                validaFalla(fecha, 'Ingrese una fecha Valida')
              
             }else if (new Date(fechaValor) < fechaMenor){
                validaFalla(fecha, 'Ingrese una fecha Valida')
                
             }else {
                validaOk(fecha)
                
             }

              // validando boton checkbox
              //Falta mostrar mensaje de error****
              if(!checkbox.checked == true){
                 console.log('debe aceptar terminos y condiciones')
              }else{
                
                console.log('chequeo valido ');
              }
                
        }

        //Creacion funciones de validacion

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

        const validaEmail = (email) =>{
            return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)
        }
        

    })