package com.example.demo.services;

import com.example.demo.models.Customer;
import com.example.demo.repositories.CustomerRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    private CustomerRepo customerRepo;

    public CustomerService(CustomerRepo customerRepo){
        this.customerRepo = customerRepo;
    }


    public Customer findCustomerByID(Long id){
        return customerRepo.findCustomerByID(id);
    }

    public List<Customer> findAllCustomers(){

        return customerRepo.findAll();

    }

    public void addNewCustomer(Customer customer) {

        customerRepo.save(customer);

    }


    public List<String> findCustomerPreferences(Long id) {

        return customerRepo.findCustomerPreferences(id);

    }


}
