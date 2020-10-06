package com.college.OnlinePrintShop.repositories;

import com.college.OnlinePrintShop.entities.Staff;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StaffRepository extends CrudRepository<Staff, Integer> {
    List<Staff> findAll();
    Staff findByEmailEquals(String email);
}
