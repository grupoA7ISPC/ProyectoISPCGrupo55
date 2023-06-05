# MisRutinas | Frontend

⚠ **IMPORTANTE**: Para inicios del proyecto, ante la ausencia de una API del backend para la conexión con la base de datos, se utilizó **[json-server](https://github.com/typicode/json-server)**: una fake REST API que obtiene datos a través de un archivo **db.json** en la raíz de la carpeta mis-rutinas.

Se debe tener instalado json-server e **iniciar al mismo tiempo el proyecto de Angular + JSON Server** para obtener los datos renderizados de esta API (véase más adelante [levantar el servidor](#levantar-el-servidor)*).

### Requisitos previos

* Tener instalado [Node](https://nodejs.org/es/download), que también incluye Node [Package Manager](https://docs.npmjs.com/about-npm) (npm). Este proyecto trabaja con la versión [18.12.1](https://nodejs.org/en/blog/release/v18.12.1).
* Tener instalado el [CLI de Angular](https://angular.io/cli) (véase más adelante la [instalación](#instalación-angular-cli)*). Este proyecto trabaja con la versión @15.2.6

## Instalación Angular CLI

Debe instalarse de forma global con alguno de los siguientes comandos:

```bash
npm install -g @angular/cli@15.2.6
```

*Que instala la versión específica del proyecto.

```bash
npm install -g @angular/cli
```

*Que instala la última versión estable del Angular CLI.

## Instalar las dependencias del proyecto

Ubícate en la carpeta frontend/mis-rutinas, a la altura del archivo **package.json**. Este archivo incluye dependencias necesarias como versiones de la plataforma de Angular, TypeScript, Bootstrap, herramientas testing, entre otros.

Instala todo con el comando:

```bash
npm install 
```

## Levantar el servidor

Ubícate en el directorio frontend/mis-rutinas.

Entre los comandos proporcionados por el CLI de Angular, para **levantar el servidor**:

```bash
ng serve 
```

Para levantar **json-server** (*véase nota importante al inicio del README), primero instalar con:

```bash
npm install -g json-server
```

Y luego levantar con:

```bash
json-server --watch db.json
```

Proporcionará una URL que por defecto suele ser http://localhost:3000. Pueden dirigirse a un "endpoint" como **http://localhost:3000/suscripciones**.

Más información de json-server en su [repositorio de GitHub](https://github.com/typicode/json-server).
