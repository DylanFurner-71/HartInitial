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
public class StudentGroupList {
@Id @Column(name = "smu_id")
String smuId;
String batch;
String study;
String studentgroup;
public String getBatch() {
	return batch;
}
public void setBatch(String batch) {
	this.batch = batch;
}
public String getStudy() {
	return study;
}
public void setStudy(String study) {
	this.study = study;
}
public String getStudentgroup() {
	return studentgroup;
}
public void setStudentgroup(String studentgroup) {
	this.studentgroup = studentgroup;
}
public String getSmuId() {
	return smuId;
}
public void setSmuId(String smuId) {
	this.smuId = smuId;
}

}
