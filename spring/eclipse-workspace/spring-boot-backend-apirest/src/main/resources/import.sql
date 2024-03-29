INSERT INTO regiones (id, nombre) VALUES (1, 'Sudamerica');
INSERT INTO regiones (id, nombre) VALUES (2, 'Centroamerica');
INSERT INTO regiones (id, nombre) VALUES (3, 'Norteamerica');
INSERT INTO regiones (id, nombre) VALUES (4, 'Europa');
INSERT INTO regiones (id, nombre) VALUES (5, 'Asia');
INSERT INTO regiones (id, nombre) VALUES (6, 'Africa');
INSERT INTO regiones (id, nombre) VALUES (7, 'Oceania');
INSERT INTO regiones (id, nombre) VALUES (8, 'Antartida');

INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (1, 'Nicholas', 'Silva', 'bnsilva5@gmail.com', '2021-03-06');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (1, 'Manuel', 'Silva', 'masr@gmail.com', '2021-06-06');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (2, 'Juan', 'Gatillazo', 'juan_g@gmail.com', '2021-04-06');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (2, 'Nicol', 'Paine', 'nicol_pain@gmail.com', '2021-01-06');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (3, 'Maria', 'Ruiz', 'braindead@gmail.com', '2021-03-23');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (3, 'Tony', 'Silva Ruiz', 'brandon.silva@bitsamericas.com', '2021-03-23');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (3, 'Eric', 'Foresta', 'bnsilva5@misena.edu.co', '2021-03-23');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (4, 'Bet', 'Ruiz', 'silvaruizbrandon@gmail.com', '2021-03-23');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (4, 'Nicholas', 'Draven', 'forestatony@gmail.com', '2021-03-23');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (4, 'Nathalie', 'Silva C', 'nathalie@false.com', '2021-03-23');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (5, 'Rick', 'Allen', 'rick@true.com', '2021-03-23');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (6, 'Joe', 'Elliot', 'joee123@def.com', '2021-03-23');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (7, 'Milo', 'Rod', 'rodmilo@gmail.com', '2021-03-23');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (8, 'James', 'Hatfield', 'james@metallica.com', '2021-03-23');

INSERT INTO usuarios (username, password, enabled) VALUES ('NikkiSixx', '$2a$10$UL318Ah/e.caacZcXdvTOOAhtGsPIdn0moapSUCLQs1WpcJWVD5t6', 1);
INSERT INTO usuarios (username, password, enabled) VALUES ('admin', '$2a$10$jAfghMPBEtO3lwK9eIPO.uVd5CbJAhvAfRIfq2My4MB9HLphcOhCu', 1);

INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (1, 1);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2, 2);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2, 1);
