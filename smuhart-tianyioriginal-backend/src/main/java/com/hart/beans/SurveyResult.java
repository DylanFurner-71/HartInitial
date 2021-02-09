package com.hart.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.annotations.DynamicUpdate;

@Entity @DynamicUpdate(value=true)
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "Student_Survey_Resp")
public class SurveyResult
{
	@Id @Column(name = "smu_id")
	String smuId;

	@Column(name = "Survey_Resp")
	String surveyResp;

	String surveydate;

	public String getSmuId()
	{
		return smuId;
	}

	public void setSmuId(String smuId)
	{
		this.smuId = smuId;
	}

	
	public String getSurveyResp()
	{
		return surveyResp;
	}

	public void setSurveyResp(String surveyResp)
	{
		this.surveyResp = surveyResp;
	}
	
	/*@Override
	public int hashCode() {
		return getSmuId();
	}
	
	@Override
	public boolean equals(Object obj) {
		return ((SurveyResult)obj).getSmuId().equals(getSmuId());
	}*/

	public String getSurveydate() {
		return surveydate;
	}

	public void setSurveydate(String surveydate) {
		this.surveydate = surveydate;
	}

}
