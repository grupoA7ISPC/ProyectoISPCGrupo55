# MisRutinas | Backend

### Requisitos previos.

* Deben tener instalado [Python y pip](https://www.python.org/downloads/). Se procederán las instrucciones con un entorno virtual.
* ⚠ Las instrucciones que inician en "python" pueden variar a "python3" con SO Linux.
* Recomendamos tener instalado una herramienta visual de MySQL como PhpMyAdmin (con XAMPP) o MySQL Workbench.

## Instalación y configuración del entorno virtual

Crea una carpeta para el entorno virtual. Se recomienda en la raíz del directorio backend; **asegúrate de agregar el nombre de tu nueva carpeta al archivo .gitignore.** (o utiliza de nombre alguno de los que ya figure allí, como **MRVirtual** o **proyectoMisRutinas**).

Dentro de ella, crea el entorno ejecutando el comando:

```bash
python -m venv nombre-entorno-virtual
```

Activa el entorno virtual moviéndote con 'cd' a tu carpeta **nombre-entorno-virtual** y ejecuta el comando:

```bash
Scripts/activate
```

**Recuerda que debes activar el entorno virtual cada vez que trabajes en el proyecto.**

Con el entorno virtual ya activo, dirígete a la carpeta "backend/misRutinas" donde se encuentra el archivo **requirements.txt** y ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

```bash
pip install -r requirements.txt
```

El proceso puede demorar. Una vez finalizado, tendrás todas las dependencias necesarias para trabajar con el proyecto instaladas.

*Si en algún momento necesitas desactivar el entorno virtual, puedes hacerlo con el comando:

```bash
deactivate
```

## Base de datos

La base de datos será local por ahora.

Crea un archivo **local.py** (es importante que sea este y no otro nombre) en la carpeta **settings** (*backend/misRutinas/misRutinas/settings*) a la misma altura que el archivo **"settingsBase.py"**.

Copia la siguiente estructura en **local.py**:

```python
from .settingsBase import *

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': '', # NOMBRE BD
        'USER': 'root', # U OTRO
        'PASSWORD': '', # CONTRASEÑA DE USER
        'HOST': 'localhost',
        'PORT': '3306', # POR DEFECTO, SI TIENEN OTRO CAMBIAR
        'OPTIONS': {
            'sql_mode': 'traditional'
        }
    }
}
```

Recuerden crear la Base de Datos ('NAME') con MySQL utilizando herramientas como la terminal, PhpMyAdmin o Workbench (solo la base de datos, para conectarla):

```sql
CREATE DATABASE IF NOT EXISTS nombre_base_de_datos;
```

## Uso del server

Ejecutar el servidor local (backend/misrutinas) con el comando:

```bash
python manage.py runserver
```

Brindará una URL que suele ser http://127.0.0.1:8000. Al abrirla debe haber una interfaz como la siguiente:

![Instalación exitosa](https://tutorial.djangogirls.org/es/django_start_project/images/install_worked.png)

## Superusuario

Deberán crear un superusuario para acceder al panel admin en la direción http://127.0.0.1:8000/admin.

En backend/misRutinas ejecutar el comando:

```bash
python manage.py createsuperuser
```

Y establecer los datos requeridos.

*Sugerimos que el email tenga extensión @misrutinas.com
