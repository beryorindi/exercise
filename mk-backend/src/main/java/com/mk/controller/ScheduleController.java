package com.mk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mk.entity.Schedule;
import com.mk.repository.ScheduleRepository;

@Controller
public class ScheduleController {
	@Autowired
	private ScheduleRepository scheduleRepo;
	public ScheduleController() {}
	
	@GetMapping("/schedules")
	@ResponseBody
	public Iterable<Schedule> getAll() {
		return scheduleRepo.findAll();
	}
	
	@PostMapping("/schedules")
	@ResponseBody
	public Schedule postSchedule( @RequestBody Schedule schedule ) {
		return scheduleRepo.save(schedule);
	}
		
	@PutMapping("/schedules")
	@ResponseBody
	public Schedule updateSchedule( @RequestBody Schedule schedule ) {
		return scheduleRepo.save(schedule);
	}
	
	@DeleteMapping("/schedules/{id}")
	@ResponseBody
	public void deleteSchedule( @PathVariable("id") String id) {
		scheduleRepo.delete(id);
	}
}
