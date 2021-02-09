package com.hart.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

@Entity
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Table(name = "profilephoto")
public class ProfilePic {
	
@Id
private String smuId;

@Column(name = "profilephoto")
private byte[] photo;

public String getSmuId() {
	return smuId;
}

public void setSmuId(String smuId) {
	this.smuId = smuId;
}

public byte[] getPhoto() {
	return photo;
}

public void setPhoto(byte[] photo) {
	this.photo = photo;
}

}
