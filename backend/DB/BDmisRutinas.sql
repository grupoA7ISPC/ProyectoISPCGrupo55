/*Vero*/
CREATE DATABASE mis_rutinas;
USE mis_rutinas;

CREATE TABLE usuario(
	id_user INT primary key not null,
	nombre varchar(45),
    apellido varchar(45),
    fec_nac date,
    nom_user varchar(45) not null,
    email varchar(45) not null,
    pass varchar(20) not null,
    fec_ing date,
    IMC float
);
/*Arias Guillermo*/
CREATE TABLE rut_usuario(
	id_rut_usuario INT primary key not null,
);

CREATE TABLE rutina(
	id_rutina INT primary key not null,
);

CREATE TABLE rut_ejercicio(
	id_rut_ejerc INT primary key not null,
);
/*Andrés*/
CREATE TABLE ejercicio(
	id_ejerc INT primary key not null,
);

CREATE TABLE logro(
	id_logro INT primary key not null,
);

CREATE TABLE plan_alimentacion(
	id_plan INT primary key not null,
);
/*Horacio*/
CREATE TABLE calendario(
	id_calen INT primary key not null,
	fecha DATE,
	hora VARCHAR(45),
	descripcion VARCHAR(45),
	historial_user_id INT,
	rut_ejerc_id INT,
	logro_rutina_id INT,
	constraint fk_hui foreign key (historial_user_id) references historial(id_historial),
	constraint fk_rei foreign key (rut_ejerc_id) references rut_ejerc(id_rut_ejerc),
	constraint fk_lri foreign key (logro_rutina_id) references logro(id_logro)
);

CREATE TABLE historial(
	id_historial INT primary key not null,
	peso float,
	altura float,
	IMC float,
	user_id INT, 
	constraint fk_ui foreign key (user_id) references usuario(id_user)
);
