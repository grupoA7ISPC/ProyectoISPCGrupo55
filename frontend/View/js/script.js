/*evento formulario Contacto */
const datos = {
    nombre:'',
    email:'',
    asunto:'',
    mensaje:''
};

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensage = document.querySelector('#mensage');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
asunto.addEventListener('input', leerTexto);
mensage.addEventListener('input', leerTexto);

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit',function(evento) {
    //console.log(evento);
    evento.preventDefault();// nevesario para validar un formulario

    
    const{nombre, email, asunto, mensage }= datos;
    if (nombre === "" || email==="" || asunto ==="" || mensage ===""){
        mostrarAlert("Todos los campos son obligatorios", true)
        return;
    };

mostrarAlert('Enviado Correctamente');
});



  function leerTexto(e){
    console.log(e.target.value);
     datos[e.target.id]=e.target.value;

    // console.log(datos);
}
function mostrarAlert(mensage, error = null){
    const alert =document.createElement('P')
    alert.textContent = mensage;

    if (error) {
        alert.classList.add('error')    
    } else {
        alert.classList.add('correcto')
    }
    formulario.appendChild(alert);

    setTimeout(()=> {
       alert.remove();
    
       },2000);
    };