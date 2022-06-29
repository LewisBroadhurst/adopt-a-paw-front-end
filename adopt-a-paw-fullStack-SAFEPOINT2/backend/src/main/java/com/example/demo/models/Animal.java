package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.web.bind.annotation.ControllerAdvice;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "animals")
public class Animal {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "age")
    private int age;

    @Column(name = "sex_id")
    private Long sex_id;

    @Column(name = "location")
    private String location;

    @Column(name = "organisation_id")
    private Integer organisation_id;

    @Column(name = "species_id")
    private Integer species_id;

    @Column(name="breed", columnDefinition = "varchar(255) default 'UNKNOWN'")
    private String breed;

    @Column(name = "reserved" , columnDefinition = "boolean default false")
    private boolean reserved;

    @Column(name = "adopted" , columnDefinition = "boolean default false")
    private boolean adopted;

    @JsonIgnoreProperties({"animal"})
    @OneToMany(mappedBy = "animal", cascade = CascadeType.ALL)

    private List<Application> application;

    // no arg constructor

    public Animal() {
    }

    // arg constructor
    public Animal (Long id, String name, Integer species_id, Integer age, String breed, String sex, String location, String organisation, Integer organisation_id, boolean reserved, boolean adopted) {
        this.id = id;
        this.name = name;
        this.species_id = species_id;
        this.age = age;
        this.breed = breed;

        this.location = location;

        this.organisation_id = organisation_id;
        this.reserved = reserved;
        this.adopted = adopted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }




    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Boolean getReserved() {
        return reserved;
    }

    public void setReserved(Boolean reserved) {
        this.reserved = reserved;
    }


    public Boolean getAdopted() {
        return adopted;
    }

    public void setAdopted(Boolean adopted) {
        this.adopted = adopted;
    }

    public Integer getOrganisation_id() {
        return organisation_id;
    }

    public void setOrganisation_id(Integer organisation_id) {
        this.organisation_id = organisation_id;
    }

    public Integer getSpecies_id() {
        return species_id;
    }

    public void setSpecies_id(Integer species_id) {
        this.species_id = species_id;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public List<Application> getApplication() {
        return application;
    }

    public void setApplication(List<Application> application) {
        this.application = application;
    }

}
