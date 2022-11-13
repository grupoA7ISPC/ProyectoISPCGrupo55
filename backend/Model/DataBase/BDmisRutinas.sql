CREATE DATABASE mis_rutinas;
USE mis_rutinas;

CREATE TABLE usuario(
	id_user INT PRIMARY KEY NOT NULL,
	nombre VARCHAR(45),
    apellido VARCHAR(45),
    fec_nac DATE,
    nom_user VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    pass VARCHAR(20) NOT NULL,
    fec_ing DATE,
    IMC FLOAT
);

CREATE TABLE rutina(
	id_rutina INT PRIMARY KEY NOT NULL,
    nombre VARCHAR(25)
);

CREATE TABLE rut_usuario(
	id_rut_usuario INT PRIMARY KEY NOT NULL,
    /*rut_id INT,    esta línea no va porque hace referencia a la misma f que rutina_id_rutina*/ 
    usuario_id INT,
    rutina_id_rutina INT, 
    CONSTRAINT  fk_uid FOREIGN KEY (usuario_id) REFERENCES usuario(id_user),
    CONSTRAINT  fk_rir FOREIGN KEY (rutina_id_rutina) REFERENCES rutina(id_rutina)
);

CREATE TABLE ejercicio(
	id_ejerc INT PRIMARY KEY NOT NULL,
	nombre VARCHAR(45),
	zona_cuerpo VARCHAR(45)
);

CREATE TABLE rut_ejercicio(
	id_rut_ejerc INT PRIMARY KEY NOT NULL,
    serie INT,
    repeticiones INT,
    duracion TIME,
    descanso VARCHAR(45),
    rutina_id INT,
    ejercicio_id INT,
    CONSTRAINT fk_ri FOREIGN KEY (rutina_id) REFERENCES rutina(id_rutina),
    CONSTRAINT fk_ei FOREIGN KEY (ejercicio_id) REFERENCES ejercicio(id_ejerc)
);

CREATE TABLE logro(
	id_logro INT PRIMARY KEY NOT NULL,
	medalla VARCHAR(45),
    fk_id_rutina INT,
	CONSTRAINT fk_ir FOREIGN KEY (fk_id_rutina) REFERENCES rutina(id_rutina)
);

CREATE TABLE plan_alimentacion(
	id_plan INT PRIMARY KEY NOT NULL,
	archivo VARCHAR (45),
	req_agua VARCHAR(45),
    fk_id_user INT,
	CONSTRAINT fk_iu FOREIGN KEY (fk_id_user) REFERENCES usuario(id_user)
);

CREATE TABLE historial(
	id_historial INT PRIMARY KEY NOT NULL,
	peso FLOAT,
	altura FLOAT,
	IMC FLOAT,
	user_id INT, 
	CONSTRAINT fk_ui FOREIGN KEY (user_id) REFERENCES usuario(id_user)
);

CREATE TABLE calendario(
	id_calen INT PRIMARY KEY NOT NULL,
	fecha DATE,
	hora TIME,
	descripcion VARCHAR(45),
	historial_user_id INT,
	rut_ejerc_id INT,
	logro_rutina_id INT,
	CONSTRAINT fk_hui FOREIGN KEY (historial_user_id) REFERENCES historial(id_historial),
	CONSTRAINT fk_rei FOREIGN KEY (rut_ejerc_id) REFERENCES rut_ejercicio(id_rut_ejerc),
	CONSTRAINT fk_lri FOREIGN KEY (logro_rutina_id) REFERENCES logro(id_logro)
);

/* Consultas  INSERT , UPDATE, SALECT , JOIN */
SELECT * FROM usuario;
SELECT * FROM ejercicio;
SELECT * FROM rut_ejercicio;
SELECT * FROM rutina;

INSERT INTO usuario VALUE (01,"guillermo","arias",'1992-02-09',"misterio07","darioguille92@gmail.com","nhybubmju",'2022-04-06',null);
INSERT INTO ejercicio VALUE(01,"abdomen","media");
INSERT INTO rutina VALUE (1,"abdominales");
INSERT INTO rut_ejercicio VALUE (1,3,10,'00:00:10','00:00:01:',1,1);
INSERT INTO rut_usuario VALUE (1,1,1);

UPDATE rut_ejercicio 
SET duracion = '00:05:00'
WHERE id_rut_ejerc = 1;

UPDATE rut_ejercicio
SET descanso = '00:00:59'
WHERE id_rut_ejerc = 1;

SELECT usuario.nombre, usuario.apellido,rut_ejercicio.serie ,rut_ejercicio.repeticiones,rut_ejercicio.duracion,rut_ejercicio.descanso
FROM  usuario 
INNER JOIN rut_usuario on usuario.id_user=rut_usuario.usuario_id
INNER JOIN rutina on rutina.id_rutina=usuario.id_user
INNER JOIN rut_ejercicio on rut_ejercicio.rutina_id=rutina.id_rutina;

INSERT INTO usuario VALUE (2,"andres","luna",'1979-01-01',"andrus","andresito@luna.com","sdbuj43g5677",'2022-11-01',null);
INSERT INTO ejercicio VALUE(2,"cuadriceps","piernas");
INSERT INTO rutina VALUE (2,"piernas");
INSERT INTO rut_ejercicio VALUE (2,4,4,'00:15:00','00:10:00:',2,02);
INSERT INTO rut_usuario VALUE (2,2,2);
INSERT INTO logro VALUE (2,"Comienzo",2);
INSERT INTO  historial VALUE (2,100,1.9,0,2);
INSERT INTO calendario VALUE (2,'2023-02-01','10:00:00',"Dias que voy al Gym",2,2,2);

UPDATE rut_ejercicio 
SET duracion = '00:10:00'
WHERE id_rut_ejerc = 2;

UPDATE rut_ejercicio
SET descanso = '00:08:33'
WHERE id_rut_ejerc = 2;

select usuario.* ,rutina.*,ejercicio.*,calendario.*,logro.*,historial.*
from  usuario 
inner join rut_usuario on usuario.id_user=rut_usuario.usuario_id
inner join rutina on rutina.id_rutina=usuario.id_user
inner join rut_ejercicio on rut_ejercicio.rutina_id=rutina.id_rutina
inner join ejercicio on ejercicio.id_ejerc=rut_ejercicio.ejercicio_id
inner join calendario on calendario.rut_ejerc_id=rut_ejercicio.id_rut_ejerc
inner join logro on logro.id_logro=logro_rutina_id
inner join historial on historial.id_historial=calendario.historial_user_id;


INSERT INTO usuario VALUE (03,"Horacio","Quiroga",'1977-04-05',"Horacio2022","horacio2022@quiroga.com","HHEEQQ2022",'2022-11-01',null);
INSERT INTO ejercicio VALUE(03,"pectorales","hombros");
INSERT INTO rutina VALUE (3,"pecho_espalda");
INSERT INTO rut_ejercicio VALUE (8,10,10,'00:20:00','00:15:00:',3,03);
INSERT INTO rut_usuario VALUE (3,3,3);

UPDATE rut_ejercicio 
SET duracion = '00:20:00'
WHERE id_rut_ejerc = 3;

UPDATE rut_ejercicio
SET descanso = '00:15:00'
WHERE id_rut_ejerc = 3;

INSERT INTO usuario VALUE (4,"Verónica","Torres",'1984-07-08',"verofx","verofxianeca@gmail.com","V3r0N1c4",'2022-11-10',null);
INSERT INTO ejercicio VALUE(4,"abdomen lateral","media"),(5,"gluteos","media");
INSERT INTO rutina VALUE (4,"ABS y glúteos");
INSERT INTO logro VALUE (4,"ABS básico",4);
INSERT INTO historial VALUE (4,64,1.64,0,4);
INSERT INTO rut_usuario VALUE (4,4,4);
INSERT INTO rut_ejercicio VALUE (4,4,3,'00:30:00','00:00:05',4,4);
INSERT INTO calendario VALUE (4,'2022-11-10','00:10:00',"Inicio de entrenamiento",4,4,4);


UPDATE historial
SET peso = 63
WHERE id_historial = 4;

UPDATE rut_ejercicio
SET descanso = '00:00:07'
WHERE id_rut_ejerc = 4;

SELECT usuario.nombre, usuario.apellido, usuario.fec_ing ,rutina.nombre as "nombre de rutina",logro.medalla, logro.fk_id_rutina as "Nro de rutina"
FROM  usuario
INNER JOIN rut_usuario on rut_usuario.usuario_id=usuario.id_user
INNER JOIN rutina on rutina.id_rutina=rut_usuario.rutina_id_rutina
INNER JOIN logro on logro.fk_id_rutina=rutina.id_rutina