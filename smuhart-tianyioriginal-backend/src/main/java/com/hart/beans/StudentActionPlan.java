package com.hart.beans;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student_Action_Plan")
public class StudentActionPlan {
	@Id
	private String smu_id;
	private Date planstartdate;
	private Date planenddate;
	private String planresponse1;
	private String planresponse2;
	private String planresponse3;
	private String planresponse4;
	private Boolean archived;
	private String progressresponse;

	public String getSmu_id() {
		return smu_id;
	}

	public void setSmu_id(String smu_id) {
		this.smu_id = smu_id;
	}

	public String getPlanstartdate() {
		if (planstartdate == null || "".equals(planstartdate))
		return new SimpleDateFormat("MM/dd/yyyy").format(new Date());
		return new SimpleDateFormat("MM/dd/yyyy").format(planstartdate);
	}

	public void setPlanstartdate(Date planstartdate) {
		this.planstartdate = planstartdate;
	}

	public Date getPlanenddate() {
		return planenddate;
	}

	public void setPlanenddate(Date planenddate) {
		this.planenddate = planenddate;
	}

	public String getPlanresponse1() {
		return planresponse1;
	}

	public void setPlanresponse1(String planresponse1) {
		this.planresponse1 = planresponse1;
	}

	public String getPlanresponse2() {
		return planresponse2;
	}

	public void setPlanresponse2(String planresponse2) {
		this.planresponse2 = planresponse2;
	}

	public String getPlanresponse3() {
		return planresponse3;
	}

	public void setPlanresponse3(String planresponse3) {
		this.planresponse3 = planresponse3;
	}

	public String getPlanresponse4() {
		return planresponse4;
	}

	public void setPlanresponse4(String planresponse4) {
		this.planresponse4 = planresponse4;
	}

	public Boolean getArchived() {
		return archived;
	}

	public void setArchived(Boolean archived) {
		this.archived = archived;
	}

	public String getProgressresponse() {
		return progressresponse;
	}

	public void setProgressresponse(String progressresponse) {
		this.progressresponse = progressresponse;
	}
}
