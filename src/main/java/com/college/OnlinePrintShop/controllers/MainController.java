package com.college.OnlinePrintShop.controllers;

import com.college.OnlinePrintShop.entities.Staff;
import com.college.OnlinePrintShop.repositories.StaffRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class MainController {
    @Autowired
    private StaffRepository staffRepository;
    Logger logger = LoggerFactory.getLogger(MainController.class);

    @GetMapping("/staff")
    private List<Staff> getAllStaff(){
        return staffRepository.findAll();
    }

    @GetMapping("/email={email}/password={password}")
    private Staff getStaffByEmail(@PathVariable(name="email") String email, @PathVariable(name="password") String password){
        Staff staff = staffRepository.findByEmailEquals(email);
        if(staff != null){
            if(staff.getPassword().equals(password)){
                return staff;
            }else return new Staff();
        }else return new Staff();
    }

    @PostMapping("/addStaff")
    private void addEmployee(@RequestBody Staff staff){
        logger.info(staff.toString());
        staffRepository.save(staff);
    }
}
