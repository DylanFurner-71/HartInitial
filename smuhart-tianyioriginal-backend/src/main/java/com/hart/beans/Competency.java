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

public class Competency {
@Id @Column(name = "smu_id")
String smuId;

String competency1;

String competency2;

Integer addedcompetency;

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

public String getSmuId() {
	return smuId;
}

public void setSmuId(String smuId) {
	this.smuId = smuId;
}

public Integer getAddedcompetency() {
	return addedcompetency;
}

public void setAddedcompetency(Integer addedcompetency) {
	this.addedcompetency = addedcompetency;
}


}
