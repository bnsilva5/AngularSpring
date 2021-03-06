package com.nicholas.springboot.backend.apirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.nicholas.springboot.backend.apirest.models.entity.Cliente;

/**
 * Data Access Object
 * @author Nicholas
 * Se usa para aislar a una aplicación de la tecnología de persistencia Java subyacente (API de Persistencia Java)
 * la cual podría ser JDBC, JDO, Enterprise JavaBeans, TopLink, EclipseLink, Hibernate, iBATIS, o cualquier otra tecnología de persistencia.
 * Usar Objetos de Acceso de Datos significa que la tecnología subyacente puede ser actualizada o cambiada sin cambiar otras partes de la aplicación.
 */

public interface IClienteDao extends CrudRepository <Cliente, Long>{

}
