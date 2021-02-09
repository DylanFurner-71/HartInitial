package com.hart.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "student")
@SecondaryTable(name = "Student_Survey_Resp")
public class StudentSurveyStats {
	@Id
	@PrimaryKeyJoinColumn
	@Column(name = "smu_id")
	String smuId;
	@Column(name = "study")
	String study;
	@Column(name = "batch")
	String batch;
	@Column(name = "class",table="student")
	String yearInSchool;
	@Column(name = "Survey_Resp", table="Student_Survey_Resp")
	String Survey_Resp;

	public String getSmuId() {
		return smuId;
	}

	public void setSmuId(String smuId) {
		this.smuId = smuId;
	}

	public String getStudy() {
		return study;
	}

	public void setStudy(String study) {
		this.study = study;
	}

	public String getBatch() {
		return batch;
	}

	public void setBatch(String batch) {
		this.batch = batch;
	}

	public String getYearInSchool() {
		return yearInSchool;
	}

	public void setYearInSchool(String yearInSchool) {
		this.yearInSchool = yearInSchool;
	}

	public String getSurvey_Resp() {
		return Survey_Resp;
	}

	public void setSurvey_Resp(String survey_Resp) {
		Survey_Resp = survey_Resp;
	}

}
