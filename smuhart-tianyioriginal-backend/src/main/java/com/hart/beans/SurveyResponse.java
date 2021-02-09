package com.hart.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "Student_Survey_Resp")
@SecondaryTable(name = "student")
public class SurveyResponse {
	@Id
	@PrimaryKeyJoinColumn
	@Column(name = "smu_id")
	String smuId;
	@Column(name = "Poor_leader")
	String poorLeader;
	@Column(name = "Good_leader")
	String goodLeader;
	@Column(name = "Survey_Resp")
	String surveyResp;
	@Column(name = "first_name", table="student")
	String firstName;
	@Column(name = "last_name", table="student")
	String lastname;
	@Transient
	String name;
	
	String getObjectId () {
		return smuId + poorLeader + surveyResp + firstName + lastname;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getName() {
		String nameStr = getFirstName() + ", " + getLastname();
		return nameStr;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSmuId() {
		return smuId;
	}

	public void setSmuId(String smuId) {
		this.smuId = smuId;
	}

	public String getPoorLeader() {
		return poorLeader;
	}

	public void setPoorLeader(String poorLeader) {
		this.poorLeader = poorLeader;
	}

	public String getGoodLeader() {
		return goodLeader;
	}

	public void setGoodLeader(String goodLeader) {
		this.goodLeader = goodLeader;
	}

	public String getSurveyResp() {
		return surveyResp;
	}

	public void setSurveyResp(String surveyResp) {
		this.surveyResp = surveyResp;
	}
	
	/*@Override
	public int hashCode() {
		return getObjectId().hashCode();
	}
	
	@Override
	public boolean equals(Object obj) {
		return ((SurveyResponse)obj).getObjectId().equals(getObjectId());
	}*/

}
