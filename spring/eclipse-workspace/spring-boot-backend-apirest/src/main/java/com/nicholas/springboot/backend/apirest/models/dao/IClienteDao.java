package com.nicholas.springboot.backend.apirest.models.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.nicholas.springboot.backend.apirest.models.entity.Cliente;
import com.nicholas.springboot.backend.apirest.models.entity.Region;

/**
 * Data Access Object
 * @author Nicholas
 * Se usa para aislar a una aplicación de la tecnología de persistencia Java subyacente (API de Persistencia Java)
 * la cual podría ser JDBC, JDO, Enterprise JavaBeans, TopLink, EclipseLink, Hibernate, iBATIS, o cualquier otra tecnología de persistencia.
 * Usar Objetos de Acceso de Datos significa que la tecnología subyacente puede ser actualizada o cambiada sin cambiar otras partes de la aplicación.
 */

public interface IClienteDao extends JpaRepository <Cliente, Long>{
	
	@Query("from Region")
	public List<Region> findAllRegiones();

}
