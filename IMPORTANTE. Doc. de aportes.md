**Por razones personales, no podré atender como corresponde el inicio del Sprint 1, días 05/10 al 12/10. Debido a que la fase inicial en la distribución de tareas y votaciones es elemental en el equipo, y a fines de compartir también mis aportes, este documento está destinado a ser de ayuda y guía para mis compañeros en el Scrum Team.**

**SON SOLO RECOMENDACIONES Y APORTES PERSONALES. NO ES UNA GUÍA ABSOLUTA Y PUEDEN OBTENER TANTO COMO PRESCINDIR DE LAS DESCRIPCIONES A CONTINUACIÓN. NO ES UN DOCUMENTO OFICIAL, ES SOLO UNA COMPENSACIÓN A MIS COMPAÑEROS POR MI AUSENCIA ENTENDIÉNDOSE COMO UNA RESPONSABILIDAD Y COMPROMISO ANTE ELLOS.**

*Todo lo especificado a continuación es referido al FrontEnd, específicamente, a la interfaz visual, tecnologías HTML y CSS, y parte de JavaScript.**

# APORTES.
## 1. Diseño de Interfaz de Usuario 
Debatan y dejen bien clara la interfaz visual de la web. Dos factores importantes que se pueden definir mediante una votación, son las **paletas de colores** y **tipografías** que después se transladarán a un diccionario de CSS accesible a todos; esto facilitará desde el comienzo los valores a manejar. Dado el caso que decidan manejarlo por votos, esta es mi propuesta:

### Paleta --> `#FAE3BE` `#FF6600` `#C31207` `#77024D` --- `#212121` `#757575` `#BDBDBD` `#000000`
![Paleta de Colores Propuesta](https://user-images.githubusercontent.com/106170952/193969594-8cfa2073-527b-449b-8d5c-fd55fd056020.png)

*Coloquen los nombres de los colores de acuerdo a la nomenclatura hexadecimal o RGB. Los últimos 3 de la primera fila son los 3 colores base; el número 1 ambas filas es el cambio a modo diurno/nocturno. Los 3 restantes de la segunda fila son correspondiente a tipografía y separadores. Página útil para crear paletas: https://color.adobe.com/es/create/color-wheel*

### Tipografía --> ANTON - Títulos y/o INTER TIGHT - Cuerpo
![Fuentes - Inter Tight   Anton](https://user-images.githubusercontent.com/106170952/193946693-e8200388-af5a-4ac2-b8b1-75f5522d79fd.png)
*La forma más segura de obtener fuentes es en https://fonts.google.com/.  Se recomienda que no excedan 2 familias de tipografías (título y cuerpo, correspondientemente). También es recomendable seleccionar al menos dos pesos de 300 y 500.*
```
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter+Tight:wght@300;500&display=swap" rel="stylesheet">
```

**Otros aspectos a considerar pueden ser la sangría entre elementos, jerarquías y esquemas de navegación.**

Si alguien conoce Figma, Abobe, Canva u otra herramienta útil para diseñar la interfaz, ¡Úsenla! Compartan formas de estructurar visualmente la web, para que todos tengamos una idea del resultado aunque sea mediante rectángulos de diferentes tamaños con nombres. Recuerden que esto sirve mucho para pronosticar cómo se verá la página en diferentes dispositivos: computadora, celular y tablet; al tener una base de diseño, podremos manejarnos sin cuestionarnos "¿este div más acá? ¿O más allá?", y hará que todas las secciones de la página queden armoniosas y compactas. 

* Adicionalmente, deberíamos buscar una página de donde sacar imágenes sin copyright/gratuitas.

* Los íconos gráficos podemos sacarlos de https://www.flaticon.es/, permite descargarlos gratis y tiene millones que armonizan bien con cualquier estilo. 

## 2. Algunas tareas en HTML y CSS.
Algunas que se me ocurren amenamente:
* Crear el footer. 
* Crear el header - barra de navegación (e indicar si realmente estará arriba, o a los laterales).  
* Crear un recuadro con los datos del BMI de la persona para posteriormente incrustrar en Perfil y Dashboard. 
* Etc.

* Obviamente, **crear cada una de las secciones que contendrá la página**, pero TAREA IMPORTANTE: establezcan punto por punto qué datos necesita cada sección. Esto permitirá añadir contenidos con el esqueleto HTML de forma concisa y no redundante, incluyendo con qué formato se visualizará la información. Dejo todo esto a su criterio. 

## 3. Ideas
Lo ideal no es copiar, pero sí encontrar inspiración. ✨
Les dejo algunos de mis diseños e ideas favoritas, de los cuales podemos tomar algunos componentes y moldearnos a puro gusto<3: 

### Links de vídeos con ideas de interfaz para páginas fit geniales: 
* https://www.instagram.com/p/BpsKCG2hxhu/?igshid=MDJmNzVkMjY=
* https://www.instagram.com/p/CiqAKRMP974/?igshid=MDJmNzVkMjY=
* https://www.instagram.com/reel/Ch6ceH2jpHH/?igshid=MDJmNzVkMjY=
* https://www.instagram.com/p/CcVEUtgscDK/?igshid=MDJmNzVkMjY=
* https://www.instagram.com/p/Bo0_ilUByKI/?igshid=MDJmNzVkMjY=

### Links de vídeos con algunas funcionalidades con HTML, CSS y JS: 
* https://www.instagram.com/reel/CfWUD2ejWRm/?igshid=MDJmNzVkMjY=
* https://www.instagram.com/reel/CiDCM59OYFi/?igshid=MDJmNzVkMjY=
* https://www.instagram.com/reel/CiNCmn2DuQI/?igshid=MDJmNzVkMjY=
* https://www.instagram.com/reel/Ch70pVEjDBn/?igshid=MDJmNzVkMjY=
* https://www.instagram.com/reel/CieRUERPmz1/?igshid=MDJmNzVkMjY=
* https://www.instagram.com/reel/CjAtiN9vJLn/?igshid=MDJmNzVkMjY=
* https://www.instagram.com/reel/CjNde_sAKL3/?igshid=MDJmNzVkMjY=

### Algunas imágenes sueltas para que quizá sirvan de más inspiración: 
![image](https://user-images.githubusercontent.com/106170952/193952728-94ced8c2-ab23-439b-9e84-917612d22622.png)
![image](https://user-images.githubusercontent.com/106170952/193952738-a5c001f8-c6cc-4bd7-93a9-6b4deef9c623.png)
![image](https://user-images.githubusercontent.com/106170952/193952572-0112bf08-4073-4aca-b2ec-464fbde1889b.png)
![image](https://user-images.githubusercontent.com/106170952/193952758-a61487a4-cb4b-44a4-8331-62def714113a.png)
![image](https://user-images.githubusercontent.com/106170952/193952597-75ff96fa-f5b9-4f03-b378-d0294de949f0.png)
![image](https://user-images.githubusercontent.com/106170952/193952605-219b3567-b0ac-4e24-9280-89fce15da9f0.png)
![image](https://user-images.githubusercontent.com/106170952/193952650-5f3d5e1f-9214-40ef-b9e9-233dd1ad7d09.png)
![image](https://user-images.githubusercontent.com/106170952/193952673-7431cbd5-7ec3-4317-aa3f-c8b40b629a2f.png)
![image](https://user-images.githubusercontent.com/106170952/193952718-c4c31346-363a-4810-91f1-9e7a68082f69.png)
![image](https://user-images.githubusercontent.com/106170952/193952750-41298e03-8dcb-4ef2-a760-f0085a2f5c6f.png)

### También es buena idea ver la forma en que estructuran otras páginas de fitness y salud su contenido: 
* https://bigg.fit/
* https://www.crossfyapp.com/#home
* https://www.nike.com/ar/ntc-app
* https://play.google.com/store/apps/details?id=com.diet_and_workout_plan
* https://play.google.com/store/apps/details?id=com.inuba.inubaapp
* https://play.google.com/store/apps/details?id=com.socioplus&hl=es_AR&gl=US
* https://play.google.com/store/apps/details?id=com.gen.workoutme 
![image](https://user-images.githubusercontent.com/106170952/193956309-e063f27b-1ec7-416f-8085-cc40802f8bb6.png)

# RECOMENDACIONES GENERALES.
1. Recomiendo que nos distribuyamos alrededor 5 tareas cada uno, y que nadie trabaje en una tarea solo: las funcionalidades pueden trabajarse individualmente, pero es primordial ayudarnos y manejar un código compartido. 
2. Hablen de si se van a crear ramas específicas por contenidos (ej. rama "footer", rama "header", rama "panel-BMI", rama "config-perfil"), o si directamente trabajaremos en las ramas propias y en nuestras funcionalidades. Considero que es mejor la primera opción, cosa de solo fusionar la rama con el main al final, pero depende de la comodidad grupal.
3. Establezcan un idioma para desarollar el código. Tan simple como decir "español" o "inglés", porque si utilizamos nomenclaturas de diferentes lenguajes, será difícil luego llegar a un acuerdo. 
4. No se olviden NUNCA de revisar qué suben a GitHub, a dónde lo suben, y qué cambios están trayendo a su rama. Mucho cuidado, porque los procesos pueden llegar a ser engañosos. La idea no es solamente ayudarnos en el código, también en este repositorio. Sugiero que si hay quienes aún no se sienten seguros en la consola Git o en repositorios remoto/local en general, que nos reunamos y apoyemos entre compañeros para solventar dudas. 
Porque los dev Jr. son los que borran toda la Base de Datos y esos somos nosotros(????) Una herramienta muy útil para ver el flujo del trabajo de Git visualmente: https://git-school.github.io/visualizing-git/

### 5. Personalmente. Agradezco muchísimo si comunican todo por WhatsApp, ya que es el medio en el que sí voy a poder estar atenta. Quedo a su disposición y confío plenamente en ustedes<3 
