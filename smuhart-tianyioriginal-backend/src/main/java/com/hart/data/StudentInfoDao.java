package com.hart.data;

import java.util.List;

import com.hart.beans.Competency;
import com.hart.beans.Print;
import com.hart.beans.Student;
import com.hart.beans.StudentGroupList;
import com.hart.beans.StudentSurveyJoin;

public interface StudentInfoDao
{
	void saveStudentInfo(Student student);
	List<Student> getAllStudentlist(String batch);
	StudentSurveyJoin getStudentInfo(Student student);
	List<Student> getAllStudents(String surveystatus);
	void saveCompetency(Competency comp);
	void savePrintFlag(Print print);
	List<String>getStudentGroups(StudentGroupList batchstudy);
}
