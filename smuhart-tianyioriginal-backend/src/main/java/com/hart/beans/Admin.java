package com.hart.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "Admin")
public class Admin {
	
	@Id @Column(name = "smu_id")
	public String smuId;

	public String firstname;
	
	public String getSmuId() {
		return smuId;
	}

	public void setSmuId(String smuId) {
		this.smuId = smuId;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	/*@Override
	public int hashCode() {
		return getSmuId();
	}
	
	@Override
	public boolean equals(Object obj) {
		return ((Admin)obj).getSmuId().equals(getSmuId());
	}*/


}
