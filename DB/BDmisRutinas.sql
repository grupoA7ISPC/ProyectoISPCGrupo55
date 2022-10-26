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

CREATE TABLE rut_usuario(
	id_rut_usuario INT primary key not null,
);

CREATE TABLE rutina(
	id_rutina INT primary key not null,
);

CREATE TABLE rut_ejercicio(
	id_rut_ejerc INT primary key not null,
);

CREATE TABLE ejercicio(
	id_ejerc INT primary key not null,
);

CREATE TABLE logro(
	id_logro INT primary key not null,
);

CREATE TABLE plan_alimentacion(
	id_plan INT primary key not null,
);

CREATE TABLE calendario(
	id_calen INT primary key not null,
);

CREATE TABLE historial(
	id_historial INT primary key not null,
);
