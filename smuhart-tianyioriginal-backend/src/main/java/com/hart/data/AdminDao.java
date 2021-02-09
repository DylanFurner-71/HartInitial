package com.hart.data;

public interface AdminDao {
	public Boolean isAdmin(String smuId);

	public Object getStudentBatches();
	
	public String getAdminname(String smuId);
}
