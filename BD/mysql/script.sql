create database ayd2_g6;
use ayd2_g6;

create table Usuario(
	id_usuario int auto_increment not null,
    nombre varchar(200) not null,
    correo varchar(200) not null,
    password varchar(15) not null,
    primary key(id_usuario)
);

create table Contador(
	id_contador int not null,
    CUI varchar(50) not null,
    Nombre varchar(50) not null,
    NIT varchar(50) not null,
    Correo varchar(50) not null,
    Direccion varchar(50) not null,
    Estado varchar(10),
    primary key(id_contador)
);

create table Factura(
	id_factura int auto_increment not null,
	Saldo double not null,
    Mora double not null,
    Pagado int not null, /*  1 == PAGADO,   0 == NO PAGADO */
    id_contador int not null,
    Fecha timestamp not null,
    
    primary key(id_factura),
    constraint fk_factura foreign key (id_contador) references Contador(id_contador)
);

insert into Usuario(nombre,correo,password)values('admin','admin@electrica.com','admin');