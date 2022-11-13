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
      user: "visitante@gmail.com",
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
      errorMessage.innerText = "Usuario y/o contraseña incorrectos";
      errorMessage.className = "denegado";
      form.inputs.appendChild(errorMessage);

      user.classList.add("input-denegado");
      pass.classList.add("input-denegado");
    }
  }
}

btn.addEventListener("click", iniciar);

