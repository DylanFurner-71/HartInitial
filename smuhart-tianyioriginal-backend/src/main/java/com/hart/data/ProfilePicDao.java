package com.hart.data;

public interface ProfilePicDao {
	public void save(String smuId, byte[] file) throws Exception;
	public byte [] get(String smuId);
}
