# MisRutinas

### Requisitos previos. 
* Deben tener instalado [Python y pip](https://www.python.org/downloads/). Se procederán las instrucciones con un entorno virtual.

* ⚠ Las instrucciones que inician en "python" pueden variar a "python3" con SO Linux.

## Instalación y configuración del entorno virtual

Crea una carpeta para el entorno virtual. Se recomienda en la raíz del directorio backend; **asegúrate de agregar el nombre de la carpeta al archivo .gitignore.**.

Dentro de ella, crea el entorno ejecutando el comando:

```bash
python -m venv nombre-proyecto
```

Activa el entorno virtual moviéndote con 'cd' a tu carpeta **nombre-proyecto** y ejecuta el comando:

```bash
Scripts/activate
```

**Recuerda que debes activar el entorno virtual cada vez que trabajes en el proyecto.**

Con el entorno virtual ya activo, dirígete a la carpeta "backend/misRutinas" donde se encuentra el archivo **requirements.txt** y ejecuta el siguiente comando para instalar todas las dependencias del proyecto:

```bash
pip install -r requirements.txt
```

El proceso puede demorar. Una vez finalizado, tendrán todas las dependencias necesarias para trabajar con el proyecto instaladas.

*Si en algún momento necesitas desactivar el entorno virtual, puedes hacerlo con el comando:

```bash
$ deactivate

```

## Base de datos

La base de datos será local por ahora.

Crea un archivo **local.py** en la carpeta **settings** (*backend/misRutinas/misRutinas/settings*) a la misma altura que el archivo **"settingsBase.py"**.

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

Recuerden la Base de Datos ('NAME') con MySQL utilizando herramientas como PhpMyAdmin o Workbench (solo la base de datos, para conectarla).

## Uso del server

Ejecutar el servidor local con el comando:

```bash
$ python manage.py runserver

```

Brindará una URL que suele ser http://127.0.0.1:8000. Al abrirla debe haber una interfaz como la siguiente:

![Instalación exitosa](https://tutorial.djangogirls.org/es/django_start_project/images/install_worked.png)