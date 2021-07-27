package com.nicholas.springboot.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.nicholas.springboot.backend.apirest.models.entity.Usuario;

/**
 * Implementacion del repositorio
 * Se definen consultas
 *
 */

public interface IUsuarioDao extends CrudRepository <Usuario, Long>{
	
	public Usuario findByUsername(String username);
	
	@Query("select u from Usuario u where u.username=?1")
	public Usuario findByUsername2(String username);

}
