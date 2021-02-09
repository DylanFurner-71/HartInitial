package com.hart.data;

import com.hart.beans.StudentInitialResponse;

public interface StudentInitialRespDao
{
	void saveStudentInitialResp(StudentInitialResponse studentinitialresponse);
	
	StudentInitialResponse getStudentInitialResp(String smuId);
}
