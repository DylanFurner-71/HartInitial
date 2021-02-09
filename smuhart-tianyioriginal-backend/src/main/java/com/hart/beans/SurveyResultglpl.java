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

public class SurveyResultglpl {
	
	@Id @Column(name = "smu_id")
	String smuId;
	@Column(name = "Poor_leader")
	String poorLeader;
	@Column(name = "Good_leader")
	String goodLeader;
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
	
	

}
