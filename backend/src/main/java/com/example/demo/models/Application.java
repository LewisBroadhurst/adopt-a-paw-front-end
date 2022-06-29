package com.example.demo.models;


import javax.persistence.*;

@Entity
@Table(name = "applications")
public class Application {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "animal_id")
    private Animal animal;

    private Long application_type_id;

    public Application(){}



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }

    public Long getApplication_type_id() {
        return application_type_id;
    }

    public void setApplication_type_id(Long application_type_id) {
        this.application_type_id = application_type_id;
    }
}
