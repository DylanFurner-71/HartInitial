package com.hart.beans;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "debrief_info")
public class DebriefClassDate {
	
	@Id
	Integer id;
	@Transient
	String yearInSchool;
	Date session_date;
	@Transient
	String batch;
	@Transient
	String term;
	
	String thankyounote;
	public Integer getId() {
		 return (batch+term+yearInSchool).hashCode();
	}
	public void setId(Integer id) {
		this.id = getId();
	}
	public String getYearInSchool() {
		return yearInSchool;
	}
	public void setYearInSchool(String yearInSchool) {
		this.yearInSchool = yearInSchool;
	}
	public String getSession_date() {
		if(this.session_date==null ||this.session_date.equals(""))
		return new SimpleDateFormat("MM/dd/yyyy").format(new Date());
		else
		return new SimpleDateFormat("MM/dd/yyyy").format(this.session_date);
	}
	public void setSession_date(Date session_date) {
		this.session_date = session_date;
	}
	public String getBatch() {
		return batch;
	}
	public void setBatch(String batch) {
		this.batch = batch;
	}
	public String getTerm() {
		return term;
	}
	public void setTerm(String term) {
		this.term = term;
	}
	public String getThankyounote() {
		return thankyounote;
	}
	public void setThankyounote(String thankyounote) {
		this.thankyounote = thankyounote;
	}
	
	
	
	
		
}
