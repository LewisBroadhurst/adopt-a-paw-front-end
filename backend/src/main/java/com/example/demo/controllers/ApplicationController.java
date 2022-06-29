package com.example.demo.controllers;

import com.example.demo.models.Application;
import com.example.demo.services.ApplicationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class ApplicationController {

    private ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService){
        this.applicationService = applicationService;
    }

    @PostMapping("addNewApplication/{application_type_id}/{animal_id}/{customer_id}")
    public ResponseEntity addNewApplication(@PathVariable("application_type_id") Long application_type_id,
                                                         @PathVariable("animal_id") Long animal_id,
                                                         @PathVariable("customer_id") Long customer_id){

        try {
            applicationService.addNewApplication(application_type_id, animal_id, customer_id);
            return ResponseEntity.ok().body("Added");
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
        }
    }


}
