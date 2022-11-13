// function iniciar(){
//     // Creacion de los usuarios
//     let datos = [
//         {
//           "usuario": "admin",
//           "contraseña": "123Admin"
//         },

//         {
//           "usuario": "moderador",
//           "contraseña": "456Moderador"
//         },

//         {
//             "usuario": "visitante",
//             "contraseña": "789Visitante"
//           }
//     ]

//     // Tomar datos de los input
//     var user = document.getElementById('username').value;
//     var pass = document.getElementById('password').value;
//     var button = document.getElementById('button').value;

//     // Verificar si el usario exite
//     if(datos.some(dato => dato.usuario === user && dato.contraseña === pass)){   
//         window.location = "login-exitoso.html";
//     }
//     // Mensaje del que el usuario es incorrecto
//     else{
//       accesoDenegado();
//     }
//     function accesoDenegado (){

//       const contenedor = document.getElementById('form-container');
//       const campo = document.querySelector('[data-campo]')
//       const campo1 = document.querySelector('[data-campo1]')
//       let mensaje = document.createElement('p');
//       mensaje.innerText = 'Usuario y/o contraseña incorrectos';
//       mensaje.className = 'denegado';
//       contenedor.appendChild(mensaje);
//       campo.className = 'input-denegado';
//       campo1.className = 'input-denegado';
//     } 
// }

const btn = document.querySelector("#button");

function iniciar(event) { //
  // Creacion de los usuarios
  let datos = [
    {
      user: "admin",
      pass: "123Admin",
    },

    {
      user: "moderador",
      pass: "456Moderador",
    },

    {
      user: "visitante",
      pass: "789Visitante",
    },
  ];
  // Tomar datos de los input
  const form = document.querySelector(".login-form");

  const user = form.username;
  const pass = form.password;

  let userExist = false;

  datos.some((dato) => {
     // Si el usuario existe corta el bucle al cambiar la pág
    if (dato.user === user.value && dato.pass === pass.value) {
      userExist = true;
      window.location = "login-exitoso.html";
      return true;
    }
  });

// Si los datos ingresados no coinciden con las credenciales
  if (!userExist) {
    accesoDenegado(event);
  }

  function accesoDenegado(event) {
    event.preventDefault();

    if (!form.contains(document.querySelector(".denegado"))) {
      const errorMessage = document.createElement("p");
      errorMessage.innerText = "Usuario y/o pass incorrectos";
      errorMessage.className = "denegado";
      form.inputs.appendChild(errorMessage);

      user.classList.add("input-denegado");
      pass.classList.add("input-denegado");
    }
  }
}

btn.addEventListener("click", iniciar);

