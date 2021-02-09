package com.hart.data;

import com.hart.beans.StudentActionPlan;

public interface StudentActionPlanDao {
	void saveStudentActionPlan(StudentActionPlan studentActionPlan);
	StudentActionPlan getStudentActionPlan(String smuId);
}
