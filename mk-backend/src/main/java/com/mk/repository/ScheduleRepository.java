package com.mk.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import com.mk.entity.Schedule;

@RestResource
public interface ScheduleRepository extends PagingAndSortingRepository<Schedule, String> {

}
