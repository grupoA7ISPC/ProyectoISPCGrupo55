// /*evento formulario Contacto */
// const datos = {
//     nombre:'',
//     email:'',
//     asunto:'',
//     mensaje:''
// };

// const nombre = document.querySelector('#nombre');
// const email = document.querySelector('#email');
// const asunto = document.querySelector('#asunto');
// const mensage = document.querySelector('#mensage');

// nombre.addEventListener('input', leerTexto);
// email.addEventListener('input', leerTexto);
// asunto.addEventListener('input', leerTexto);
// mensage.addEventListener('input', leerTexto);

// const formulario = document.querySelector('.formulario');
// formulario.addEventListener('submit',function(evento) {
//     //console.log(evento);
//     evento.preventDefault();// nevesario para validar un formulario

    
//     const{nombre, email, asunto, mensage }= datos;
//     if (nombre === "" || email==="" || asunto ==="" || mensage ===""){
//         mostrarAlert("Todos los campos son obligatorios", true)
//         return;
//     };

// mostrarAlert('Enviado Correctamente');
// });



//   function leerTexto(e){
//     console.log(e.target.value);
//      datos[e.target.id]=e.target.value;

//     // console.log(datos);
// }
// function mostrarAlert(mensage, error = null){
//     const alert =document.createElement('P')
//     alert.textContent = mensage;

//     if (error) {
//         alert.classList.add('error')    
//     } else {
//         alert.classList.add('correcto')
//     }
//     formulario.appendChild(alert);

//     setTimeout(()=> {
//        alert.remove();
    
//        },2000);
//     };

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const campos = {
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false
}

const validaFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validar(expresiones.nombre, e.target, 'nombre');
        break;
        case "email":
            validar(expresiones.email, e.target, 'email');
        break;
        case "asunto":
            validar(expresiones.asunto, e.target, 'asunto');
        break;
        case "mensaje":
            validar(expresiones.mensaje, e.target, 'mensaje');
        break;
    }
}

const validar = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
    } else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validaFormulario);
    input.addEventListener('blur', validaFormulario);
});

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(campos.nombre && campos.email && campos.asunto){
        formulario.reset();
		document.getElementById('formulario__enviado').classList.
        add('formulario__enviado-activo');
		setTimeout(() => {
		document.getElementById('formulario__enviado').classList.remove('formulario__enviado-activo');
		}, 4000);
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
    } else {
        formulario.reset();
		document.getElementById('formulario__error').classList.add('formulario__error-activo');
        setTimeout(() => {
            document.getElementById('formulario__error').classList.remove('formulario__error-activo');
           
		}, 4000);
	}
} )