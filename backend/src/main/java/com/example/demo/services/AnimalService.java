package com.example.demo.services;


import com.example.demo.controllers.AnimalController;
import com.example.demo.models.Animal;
import com.example.demo.repositories.AnimalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Objects;
import java.util.Optional;

@Service
public class AnimalService {

    @Autowired
    private AnimalRepo animalRepo;
    @Transactional


    // UPDATE ANIMAL METHOD
    public void updateAnimal(Long id, String name, Integer species_id, Integer age, String breed, String sex, String location, String organisation, Integer organisation_id, boolean reserved, boolean adopted) {
        Animal animal = animalRepo.findById(id).orElseThrow(() -> new IllegalStateException("Animal with " + id + " does not exist!"));
        if (animal.getName() != null && !Objects.equals(animal.getName(), name)) {
            animal.setName(name);
        }
        if (animal.getSpecies_id() != null && !Objects.equals(animal.getSpecies_id(), species_id)) {
            animal.setSpecies_id(species_id);
        }

        if (animal.getBreed() != null && !Objects.equals(animal.getBreed(), breed)) {
            animal.setBreed(breed);
        }

        if (animal.getLocation() != null && !Objects.equals(animal.getLocation(), location)) {
            animal.setLocation(location);
        }

        if (animal.getOrganisation_id() != null && !Objects.equals(animal.getOrganisation_id(), name)) {
            animal.setOrganisation_id(organisation_id);
        }

    }

    // DELETE ANIMAL METHOD
    public void deleteAnimal(Long id) {
        boolean exists = animalRepo.existsById(id);
        if (!exists) {
            throw new IllegalStateException(
                    "Animal with id: " + id + " does not exist!");
        }
        animalRepo.deleteById(id);
    }

    public String findSpeciesByID(Long id){
        return animalRepo.findSpeciesByID(id);
    }

    public String findSexByID(Long id){
        return animalRepo.findSexByID(id);
    }


    public Optional<Animal> findByID(Long id){
        return animalRepo.findById(id);
    }
}
