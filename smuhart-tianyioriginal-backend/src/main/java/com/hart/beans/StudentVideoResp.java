package com.hart.beans;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student_Video_Desc")
public class StudentVideoResp {

	@Id
	private String smu_id;
	private byte[] SA;
	private byte[] IL;
	private byte[] EC;
	private byte[] RD;
	private byte[] DD;
	private byte[] EL;
	private byte[] DL;
	private byte[] CEP;
	private byte[] PS;
	private byte[] SP;
	private byte[] EI;
	private byte[] IS;
	
	public String getSmu_id() {
		return smu_id;
	}
	public void setSmu_id(String smu_id) {
		this.smu_id = smu_id;
	}
	public byte[] getSA() {
		return SA;
	}
	public void setSA(byte[] sA) {
		SA = sA;
	}
	public byte[] getIL() {
		return IL;
	}
	public void setIL(byte[] iL) {
		IL = iL;
	}
	public byte[] getEC() {
		return EC;
	}
	public void setEC(byte[] eC) {
		EC = eC;
	}
	public byte[] getRD() {
		return RD;
	}
	public void setRD(byte[] rD) {
		RD = rD;
	}
	public byte[] getDD() {
		return DD;
	}
	public void setDD(byte[] dD) {
		DD = dD;
	}

	public byte[] getDL() {
		return DL;
	}
	public void setDL(byte[] dL) {
		DL = dL;
	}
	public byte[] getCEP() {
		return CEP;
	}
	public void setCEP(byte[] cEP) {
		CEP = cEP;
	}
	public byte[] getPS() {
		return PS;
	}
	public void setPS(byte[] pS) {
		PS = pS;
	}
	public byte[] getSP() {
		return SP;
	}
	public void setSP(byte[] sP) {
		SP = sP;
	}
	public byte[] getEI() {
		return EI;
	}
	public void setEI(byte[] eI) {
		EI = eI;
	}
	public byte[] getIS() {
		return IS;
	}
	public void setIS(byte[] iS) {
		IS = iS;
	}
	public byte[] getEL() {
		return EL;
	}
	public void setEL(byte[] eL) {
		EL = eL;
	}
	
	
}
