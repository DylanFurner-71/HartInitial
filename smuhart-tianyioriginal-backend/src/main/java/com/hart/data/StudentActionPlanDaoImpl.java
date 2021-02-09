package com.hart.data;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hart.beans.StudentActionPlan;

@Repository("studentActionPlanDao")
@Transactional

public class StudentActionPlanDaoImpl extends HartDao implements StudentActionPlanDao {

	public void saveStudentActionPlan(StudentActionPlan studentActionPlan) {
		save(studentActionPlan);
	}

	public StudentActionPlan getStudentActionPlan(String smuId) {
		return get(StudentActionPlan.class, smuId);
	}

}
