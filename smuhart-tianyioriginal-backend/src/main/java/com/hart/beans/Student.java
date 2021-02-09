package com.hart.beans;

/*import java.util.SortedMap;
import java.util.TreeMap;*/

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
@Table(name = "student")
@SecondaryTable(name = "Student_Survey_Resp")
public class Student {
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

	@Column(name = "surv_status")
	String surveyStatus;

	@Column(name = "pref")
	String preferredName;

	@Column(name = "major1")
	String otherMajor;

	String batch;

	String competency1;

	String competency2;

	String ethnicity;

	String gender;

	String phonenumber;

	Boolean allowview;

	Boolean addedcompetency;

	Boolean print;

	String studentgroup;

	String study;

	/*@Transient
	String highestCompetency = null;
	
	@Transient
	String lowestCompetency = null;*/

/*	@Column(name = "Survey_Resp", table = "Student_Survey_Resp")
	String surveyResp;*/

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

	public String getBatch() {
		return batch;
	}

	public void setBatch(String batch) {
		this.batch = batch;
	}

	public String getOtherMajor() {
		return otherMajor;
	}

	public void setOtherMajor(String otherMajor) {
		this.otherMajor = otherMajor;
	}

	public String getPreferredName() {
		return preferredName;
	}

	public void setPreferredName(String preferredName) {
		this.preferredName = preferredName;
	}

	public String getSurveyStatus() {
		return surveyStatus;
	}

	public void setSurveyStatus(String surveyStatus) {
		this.surveyStatus = surveyStatus;
	}

	public String getSmuId() {
		return smuId;
	}

	public void setSmuId(String smuId) {
		this.smuId = smuId;
	}

	public String getName() {
		String nameStr = getLastname() + ", " + getFirstName();
		return nameStr;
	}

	public void setName(String name) {
		String[] names = name.split("[,]");
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

	public Boolean getPrint() {
		return print;
	}

	public void setPrint(Boolean print) {
		this.print = print;
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

	/*public void setSurveyResp(String surveyResp) {
		this.surveyResp = surveyResp;
	}*/

	/*public String getHighestCompetency () {
		competencyStr();
		return this.highestCompetency;
	}*/

/*	public String getLowestCompetency () {
		competencyStr();
		return this.lowestCompetency;
	}*/

	/*public void competencyStr() {
		if (this.highestCompetency == null || this.lowestCompetency == null)
		try {
			SortedMap<Integer, String> competencies = new TreeMap<Integer, String>();

			this.highestCompetency = "N/A";
			this.lowestCompetency = "N/A";

			if (surveyResp != null && surveyResp.length() > 0) {
				String[] resultarray = surveyResp.split("[,]");
				int selfawarelocal = Integer.parseInt(resultarray[2]) + Integer.parseInt(resultarray[5])
						+ Integer.parseInt(resultarray[8]) + Integer.parseInt(resultarray[11])
						+ Integer.parseInt(resultarray[14]);
				competencies.put(selfawarelocal, "Self Awareness");

				int illocal = Integer.parseInt(resultarray[17]) + Integer.parseInt(resultarray[20])
						+ Integer.parseInt(resultarray[23]) + Integer.parseInt(resultarray[26])
						+ Integer.parseInt(resultarray[29]);
				competencies.put(illocal, "Intentional Learner");

				int comlocal = Integer.parseInt(resultarray[24]) + Integer.parseInt(resultarray[29])
						+ Integer.parseInt(resultarray[44]) + Integer.parseInt(resultarray[74])
						+ Integer.parseInt(resultarray[89]);
				competencies.put(comlocal, "Communication");

				int rdlocal = Integer.parseInt(resultarray[32]) + Integer.parseInt(resultarray[35])
						+ Integer.parseInt(resultarray[38]) + Integer.parseInt(resultarray[41])
						+ Integer.parseInt(resultarray[44]);
				competencies.put(rdlocal, "Relationship Development");

				int ddlocal = Integer.parseInt(resultarray[47]) + Integer.parseInt(resultarray[50])
						+ Integer.parseInt(resultarray[53]) + Integer.parseInt(resultarray[56])
						+ Integer.parseInt(resultarray[59]);
				competencies.put(ddlocal, "Diversity and Difference");

				int ellocal = Integer.parseInt(resultarray[62]) + Integer.parseInt(resultarray[65])
						+ Integer.parseInt(resultarray[68]) + Integer.parseInt(resultarray[71])
						+ Integer.parseInt(resultarray[74]);
				competencies.put(ellocal, "Engaging Leadership");

				int dllocal = Integer.parseInt(resultarray[77]) + Integer.parseInt(resultarray[80])
						+ Integer.parseInt(resultarray[83]) + Integer.parseInt(resultarray[86])
						+ Integer.parseInt(resultarray[89]);
				competencies.put(dllocal, "Directive Leadership");

				int ceplocal = Integer.parseInt(resultarray[92]) + Integer.parseInt(resultarray[95])
						+ Integer.parseInt(resultarray[98]) + Integer.parseInt(resultarray[101])
						+ Integer.parseInt(resultarray[104]);
				competencies.put(ceplocal, "Champions Effective Processes");

				int pslocal = Integer.parseInt(resultarray[107]) + Integer.parseInt(resultarray[110])
						+ Integer.parseInt(resultarray[113]) + Integer.parseInt(resultarray[116])
						+ Integer.parseInt(resultarray[119]);
				competencies.put(pslocal, "Problem Solving");

				int splocal = Integer.parseInt(resultarray[122]) + Integer.parseInt(resultarray[125])
						+ Integer.parseInt(resultarray[128]) + Integer.parseInt(resultarray[131])
						+ Integer.parseInt(resultarray[134]);
				competencies.put(splocal, "Strategic Perspective");

				int eilocal = Integer.parseInt(resultarray[137]) + Integer.parseInt(resultarray[140])
						+ Integer.parseInt(resultarray[143]) + Integer.parseInt(resultarray[146])
						+ Integer.parseInt(resultarray[149]);
				competencies.put(eilocal, "Ethics and Integrity");

				int islocal = Integer.parseInt(resultarray[152]) + Integer.parseInt(resultarray[155])
						+ Integer.parseInt(resultarray[158]) + Integer.parseInt(resultarray[161])
						+ Integer.parseInt(resultarray[164]);
				competencies.put(islocal, "Innovative Spirit");
				this.highestCompetency = competencies.get(competencies.lastKey());
				this.lowestCompetency = competencies.get(competencies.firstKey());
			}
		} catch (Exception e) {
		}
	}
*/
}
