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


public class AdminStudentLoad {

	@Id @Column(name = "smu_id")
	String smuId;
	
public String getSmuId() {
		return smuId;
	}

	public void setSmuId(String smuId) {
		this.smuId = smuId;
	}

String batch;

public String getBatch() {
	return batch;
}

public void setBatch(String batch) {
	this.batch = batch;
}

/*@Override
public int hashCode() {
	return getSmuId();
}

@Override
public boolean equals(Object obj) {
	return ((AdminStudentLoad)obj).getSmuId().equals(getSmuId());
}
*/

}
