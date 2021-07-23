package com.nicholas.springboot.backend.apirest.models.services;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface IUploadFileService {
	
	public Resource cargar(String namePhoto) throws MalformedURLException;
	public String guardar(MultipartFile arcvhivo) throws IOException;
	public boolean eliminar(String namePhoto);
	public Path getPath(String namePhoto);

}




























