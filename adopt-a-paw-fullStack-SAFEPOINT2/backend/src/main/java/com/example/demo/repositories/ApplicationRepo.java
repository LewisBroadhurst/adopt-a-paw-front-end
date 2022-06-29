package com.example.demo.repositories;


import com.example.demo.models.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ApplicationRepo extends JpaRepository<Application,Long> {

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO applications (application_type_id,animal_id,customer_id) VALUES (?1,?2,?3)"
                    ,nativeQuery = true)
    void addNewApplication(Long application_type_id, Long animal_id, Long customer_id);



}
