package com.hart.data;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hart.beans.StudentInitialResponse;

@Repository("studentInitialRespDao")
@Transactional
public class StudentInitialRespDaoImpl extends HartDao implements StudentInitialRespDao
{
	
	public void saveStudentInitialResp(StudentInitialResponse studentinitialresponse) {
		save(studentinitialresponse);
		
	}

	public StudentInitialResponse getStudentInitialResp(String smuId) {
		// TODO Auto-generated method stub
		return get(StudentInitialResponse.class,smuId);
	}
	
}
