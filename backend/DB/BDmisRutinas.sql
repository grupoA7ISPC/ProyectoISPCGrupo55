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
//*Arias Guillermo*/
CREATE TABLE rut_usuario(
	id_rut_usuario INT primary key not null,
    rut_id INT,
    usuario_id INT,
    rutina_id_rutina INT, 
    constraint  fk_uid foreign key (usuario_id) references usuario (id_user),
    constraint  fk_rir foreign key (rutina_id_rutina) references rutina (id_rutina)
);

CREATE TABLE rutina(
	id_rutina INT primary key not null,
    nombre date
);

CREATE TABLE rut_ejercicio(
	id_rut_ejerc INT primary key not null,
    serie INT,
    repeticiones INT,
    duracion INT,
    descanso varchar(45),
    rutina_id INT,
    ejercicio_id INT,
    constraint fk_ri foreign key (rutina_id) references rutina (id_rutina),
    constraint fk_ei foreign key (ejercicio_id) references ejercicio (id_ejerc)
);

/*Andrés*/
CREATE TABLE ejercicio(
	id_ejerc INT primary key not null,
	nombre VARCHAR(45),
	zona_cuerpo VARCHAR(45)
);

CREATE TABLE logro(
	id_logro INT primary key not null,
	medalla VARCHAR(45),
	constraint fk_rutina_id foreign key (id_rutina) references rutina(id_rutina)  /*Deberiamos conservar los nombres, yo lo hice según grafico*/ 
);

CREATE TABLE plan_alimentacion(		/*Problemas con con pk y fk*/
	id_plan INT primary key not null,
	archivo VARCHAR (45),
	req_agua VARCHAR(45),
	user_plan_id INT
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
