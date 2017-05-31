package com.mk.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import com.mk.entity.Employee;

@RestResource
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, String>{
	
}
