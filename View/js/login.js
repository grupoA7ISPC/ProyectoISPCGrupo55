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
        alert("Usuario y/o contraseña incorrectos")

    }
    
}
