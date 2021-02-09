package com.hart.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "student")

public class Print {

	@Id @Column(name = "smu_id")
	String smuId;
	
	Boolean print;

	public Boolean getPrint() {
		return print;
	}

	public void setPrint(Boolean print) {
		this.print = print;
	}

	public String getSmuId() {
		return smuId;
	}

	public void setSmuId(String smuId) {
		this.smuId = smuId;
	}
	
}
