package com.hart.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "student")
@SecondaryTable(name = "Student_Survey_Resp")

public class StudentSurveyJoin {
	
	@Id
	@PrimaryKeyJoinColumn
	@Column(name = "smu_id")
	String smuId;
	
	@Transient
	String name;

	@Column(name = "first_name")
	String firstName;

	@Column(name = "last_name")
	String lastname;

	@Column(name = "smu_email")
	String email;

	@Column(name = "class")
	String yearInSchool;

	@Column(name = "major")
	Integer major;

	@Column(name="surv_status")
	String surveyStatus;

	@Column(name="pref")
	String preferredName;

	@Column(name="major1")
	String otherMajor;

	@Column(name="Good_leader",table="Student_Survey_Resp")
	String goodLeaderName;


	@Column(name="Poor_leader",table="Student_Survey_Resp")
	String poorLeaderName;


	
	String batch;

	String competency1;

	String competency2;

	String ethnicity;

	String gender;
	
	String phonenumber;
	
	Boolean allowview;
	
	Boolean addedcompetency;
	
	String studentgroup;
	
	String study;
	
	@Column(name="surveydate",table="Student_Survey_Resp")
	String surveydate;

	public String getSmuId() {
		return smuId;
	}

	public void setSmuId(String smuId) {
		this.smuId = smuId;
	}

	public String getName() {
		String nameStr = getLastname()+", "+getFirstName();
		return nameStr;
	}

	public void setName(String name) {
		String [] names = name.split("[,]");
		setFirstName(names[1]);
		setLastname(names[0]);
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getYearInSchool() {
		return yearInSchool;
	}

	public void setYearInSchool(String yearInSchool) {
		this.yearInSchool = yearInSchool;
	}

	public String getSurveyStatus() {
		return surveyStatus;
	}

	public void setSurveyStatus(String surveyStatus) {
		this.surveyStatus = surveyStatus;
	}

	public String getPreferredName() {
		return preferredName;
	}

	public void setPreferredName(String preferredName) {
		this.preferredName = preferredName;
	}

	public String getGoodLeaderName() {
		return goodLeaderName;
	}

	public void setGoodLeaderName(String goodLeaderName) {
		this.goodLeaderName = goodLeaderName;
	}

	public String getPoorLeaderName() {
		return poorLeaderName;
	}

	public void setPoorLeaderName(String poorLeaderName) {
		this.poorLeaderName = poorLeaderName;
	}

	public String getOtherMajor() {
		return otherMajor;
	}

	public void setOtherMajor(String otherMajor) {
		this.otherMajor = otherMajor;
	}

	public String getBatch() {
		return batch;
	}

	public void setBatch(String batch) {
		this.batch = batch;
	}

	public String getCompetency1() {
		return competency1;
	}

	public void setCompetency1(String competency1) {
		this.competency1 = competency1;
	}

	public String getCompetency2() {
		return competency2;
	}

	public void setCompetency2(String competency2) {
		this.competency2 = competency2;
	}

	public String getEthnicity() {
		return ethnicity;
	}

	public void setEthnicity(String ethnicity) {
		this.ethnicity = ethnicity;
	}

	public String getSurveydate() {
		return surveydate;
	}

	public void setSurveydate(String surveydate) {
		this.surveydate = surveydate;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Integer getMajor() {
		return major;
	}

	public void setMajor(Integer major) {
		this.major = major;
	}

	public Boolean getAllowview() {
		return allowview;
	}

	public void setAllowview(Boolean allowview) {
		this.allowview = allowview;
	}

	public Boolean getAddedcompetency() {
		return addedcompetency;
	}

	public void setAddedcompetency(Boolean addedcompetency) {
		this.addedcompetency = addedcompetency;
	}

	public String getStudentgroup() {
		return studentgroup;
	}

	public void setStudentgroup(String studentgroup) {
		this.studentgroup = studentgroup;
	}

	public String getStudy() {
		return study;
	}

	public void setStudy(String study) {
		this.study = study;
	}

	

	
}
