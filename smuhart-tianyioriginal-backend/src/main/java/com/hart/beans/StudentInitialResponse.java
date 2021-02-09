package com.hart.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "student_Initial_Resp")

public class StudentInitialResponse {
@Id @Column(name = "smu_id")
String smuId;

@Column(name = "Choice1")
String choiceone;

@Column(name = "Choice2")
String choicetwo;

@Column(name = "Choice3")
String choicethr;

@Column(name = "Choice4")
String choicefou;

@Column(name = "Choice5")
String choicefiv;

@Column(name = "Choice6")
String choicesix;

@Column(name = "Choice7")
String choicesev;

@Column(name = "Choice8")
String choiceeig;

@Column(name = "Choice9")
String choicenin;

@Transient
String [] choices;

public String[] getChoices() {
	String [] choices = new String[9] ;
	choices[0]=getChoiceone();
	choices[1]=getChoicetwo();
	choices[2]=getChoicethr();
	choices[3]=getChoicefou();
	choices[4]=getChoicefiv();
	choices[5]=getChoicesix();
	choices[6]=getChoicesev();
	choices[7]=getChoiceeig();
	choices[8]=getChoicenin();
	
	return choices;
}

public void setChoices(String[] choices) {
	setChoiceone(choices[0]);
	setChoicetwo(choices[1]);
	setChoicethr(choices[2]);
	setChoicefou(choices[3]);
	setChoicefiv(choices[4]);
	setChoicesix(choices[5]);
	setChoicesev(choices[6]);
	setChoiceeig(choices[7]);
	setChoicenin(choices[8]);
	}

public String getSmuId() {
	return smuId;
}

public void setSmuId(String smuId) {
	this.smuId = smuId;
}

@Column(name = "hartsource")
String hartsource;

public String getChoiceone() {
	return choiceone;
}

public void setChoiceone(String choiceone) {
	this.choiceone = choiceone;
}

public String getChoicetwo() {
	return choicetwo;
}

public void setChoicetwo(String choicetwo) {
	this.choicetwo = choicetwo;
}

public String getChoicethr() {
	return choicethr;
}

public void setChoicethr(String choicethr) {
	this.choicethr = choicethr;
}

public String getChoicefou() {
	return choicefou;
}

public void setChoicefou(String choicefou) {
	this.choicefou = choicefou;
}



public String getChoicefiv() {
	return choicefiv;
}

public void setChoicefiv(String choicefiv) {
	this.choicefiv = choicefiv;
}

public String getChoicesix() {
	return choicesix;
}

public void setChoicesix(String choicesix) {
	this.choicesix = choicesix;
}

public String getChoicesev() {
	return choicesev;
}

public void setChoicesev(String choicesev) {
	this.choicesev = choicesev;
}

public String getChoiceeig() {
	return choiceeig;
}

public void setChoiceeig(String choiceeig) {
	this.choiceeig = choiceeig;
}

public String getChoicenin() {
	return choicenin;
}

public void setChoicenin(String choicenin) {
	this.choicenin = choicenin;
}

public String getHartsource() {
	return hartsource;
}

public void setHartsource(String hartsource) {
	this.hartsource = hartsource;
}

/*@Override
public int hashCode() {
	return getSmuId();
}

@Override
public boolean equals(Object obj) {
	return ((StudentInitialResponse)obj).getSmuId().equals(getSmuId());
}*/

}
