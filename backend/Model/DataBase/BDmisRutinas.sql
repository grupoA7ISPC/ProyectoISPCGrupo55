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
