package com.mk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import com.mk.entity.Employee;

@RestResource
public interface EmployeeRepository extends JpaRepository<Employee, String>{
	
}
