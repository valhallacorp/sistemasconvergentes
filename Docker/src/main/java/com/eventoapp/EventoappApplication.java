package com.eventoapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.eventoapp.repository.EventoRepository;

@SpringBootApplication
@ComponentScan(basePackages= {"com.eventoapp.controller"}) //refaz o mapa de classes
@EnableJpaRepositories(basePackageClasses= EventoRepository.class)
@EnableAutoConfiguration
@EntityScan("com.eventoapp.model")
public class EventoappApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventoappApplication.class, args);
		
	}
}
