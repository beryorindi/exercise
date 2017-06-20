package com.mk.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


@Entity
@Table(name="employee")
public class Employee {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private String id;
	@Column(name="name", nullable=false)
	private String name;
	@Column(name="gender", nullable=false)
	private String gender;
	@Column(name="dob", nullable=false)
	private Date dob;
	@Column(name="phone", nullable=false)
	private String phone;
	@Column(name="image_url", nullable=false)
	private String imageUrl;
	

	
	public Employee(){}
	
	public Employee(
			String name,
			String gender,
			Date dob,
			String phone,
			String imageUrl
			){
		setName(name);
		setGender(gender);
		setDob(dob);
		setPhone(phone);
		setImageUrl(imageUrl);
	}
	
	@ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "employee_schedule", 
    joinColumns = @JoinColumn(name = "employee_id", referencedColumnName="id"), 
    inverseJoinColumns = @JoinColumn(name = "schedule_id", referencedColumnName="id"))
	private Set<Schedule> schedules;

	
	public Set<Schedule> getSchedules() {
        return schedules;
    }
	
    public void setSchedules(Set<Schedule> schedules) {
        this.schedules = schedules;
    }

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
	
}
