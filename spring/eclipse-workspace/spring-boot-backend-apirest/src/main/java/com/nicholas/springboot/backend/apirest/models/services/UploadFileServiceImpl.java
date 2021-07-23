package com.nicholas.springboot.backend.apirest.models.services;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class UploadFileServiceImpl implements IUploadFileService {
	
	private final Logger log = LoggerFactory.getLogger(UploadFileServiceImpl.class);
	private static final String DIRECTORIO_UPLOAD = "uploads";

	@Override
	public Resource cargar(String namePhoto) throws MalformedURLException {
		Path routeFile = getPath(namePhoto);
		log.info(routeFile.toString());
		
		Resource recurso = null;
		
		recurso = new UrlResource(routeFile.toUri());
		
		if (!recurso.exists() && !recurso.isReadable()) {
			routeFile = Paths.get("src/main/resources/static/images").resolve("no-user.png").toAbsolutePath();
			
			recurso = new UrlResource(routeFile.toUri());
			
			log.error("Error no se pudo cargar la imagen: " + namePhoto);
		}
		return recurso;
	}

	@Override
	public String guardar(MultipartFile file) throws IOException {
		
		String nameFile = UUID.randomUUID().toString() + "_" + file.getOriginalFilename().replace(" ", "");
		
		Path routeFile = getPath(nameFile);
		
		log.info(routeFile.toString());
		
		
		Files.copy(file.getInputStream(), routeFile);
		
		return nameFile;
	}

	@Override
	public boolean eliminar(String namePhoto) {

		if (namePhoto != null && namePhoto.length() > 0) {
			Path rutaFotoAnterior = Paths.get("uploads").resolve(namePhoto).toAbsolutePath();
			File archivoFotoAnterior = rutaFotoAnterior.toFile();
			if (archivoFotoAnterior.exists() && archivoFotoAnterior.canRead()) {
				archivoFotoAnterior.delete();
				return true;
			}
		}
		
		return false;
	}

	@Override
	public Path getPath(String namePhoto) {

		return Paths.get(DIRECTORIO_UPLOAD).resolve(namePhoto).toAbsolutePath();
	}

}
