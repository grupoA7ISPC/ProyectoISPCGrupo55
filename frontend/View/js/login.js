function iniciar(){
    // Creacion de los usuarios
    let datos = [
        {
          "usuario": "admin",
          "contraseña": "123Admin"
        },

        {
          "usuario": "moderador",
          "contraseña": "456Moderador"
        },

        {
            "usuario": "visitante",
            "contraseña": "789Visitante"
          }
    ]
    
    // Tomar datos de los input
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var button = document.getElementById('button').value;

    // Verificar si el usario exite
    if(datos.some(dato => dato.usuario === user && dato.contraseña === pass)){   
        window.location = "login-exitoso.html";
    }
    // Mensaje del que el usuario es incorrecto
    else{
        /* alert("Usuario y/o contraseña incorrectos") */
      accesoDenegado();
    }
    function accesoDenegado (){
      /* alert("Usuario y/o contraseña incorrectos"); */
      const contenedor = document.getElementById('form-container');
      let mensaje = document.createElement('p');
      mensaje.innerText = 'Usuario y/o contraseña incorrectos';
      mensaje.className = 'denegado';
      contenedor.appendChild(mensaje);
    } 
}

