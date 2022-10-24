

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
    
        
















// Solucion1
// boton.addEventListener('click', e => {
//     e.preventDefault()
//     let warnings = ""
//     let entrar = false
//     warnings.innerHTML = "";
//     let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

//     if(nombre.value.length < 6){
//         warnings+=`El nombre no es valido <br>`
//         entrar = true
//     }
    
//     if(!regexEmail.test(correo.value)){ 
//         warnings +=`El email no es valido <br>`
//         entrar = true
        
    
//     }
//     if(pass1.value.length < 8){
//         warnings +=`la contraseña no es valida <br>`
//         entrar = true

//     }
//     if(entrar){
//         warnings.innerHTML = warnings
//     }
// })






// Solucion2

// formulario.addEventListener('submit', e =>{
//     e.preventDefault();
//     checkImputs();
// });

// function checkImputs(){
//     const nombreValue = nombre.value.trim();
//     const apellidoValue = apellido.value.trim();
//     const usuarioValue = usuario.value.trim();
//     const correoValue = correo.value.trim();
//     const pass1Value = pass1.value.trim();
//     const pass2Value = pass2.value.trim();
//     const fechaValue = fecha.value.trim();

//     if(nombreValue === ''){
//         setErrorFor(nombre, 'Campo obligatorio*')
//     }
// }

// // MUESTRA EL ERROR
// function setErrorFor(input, message){
//     const inputContainer = input.parentElement;
//     const small = inputContainer.querySelector('small')
//     inputContainer.className = 'input-container error'
//     small.innerText = message;
// }

// function setSuccesFor(input){
//     const inputContainer = input.parentElement;
//     inputContainer.className = 'formControl success';
// }

// function isEmail(correo){
//     return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
// }



