package com.mk.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="schedule")
public class Schedule {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private String id;
	@Column(name="day", nullable=false)
	private int day;
	@Column(name="period", nullable=false)
	private String period;
	
	@ManyToMany(mappedBy = "schedules")
	private Set<Employee> employees;
	
	@JsonIgnore
    public Set<Employee> getEmployees() {
        return this.employees;
    }

	@JsonIgnore
    public void setEmployees(Set<Employee> employees) {
        this.employees = employees;
    }
	
	
		
	public Schedule() {}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getDay() {
		return day;
	}
	public void setDay(int day) {
		this.day = day;
	}
	public String getPeriod() {
		return period;
	}
	public void setPeriod(String period) {
		this.period = period;
	}
	
	
}
