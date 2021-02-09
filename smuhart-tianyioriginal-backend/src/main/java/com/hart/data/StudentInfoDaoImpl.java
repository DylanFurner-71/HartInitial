package com.hart.data;

import java.util.List;

import org.hibernate.Query;

import org.hibernate.Criteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hart.beans.Competency;
import com.hart.beans.Print;
import com.hart.beans.Student;
import com.hart.beans.StudentGroupList;
import com.hart.beans.StudentSurveyJoin;
import com.hart.util.HartUtil;

@Repository("studentInfoDao")
@Transactional
public class StudentInfoDaoImpl extends HartDao implements StudentInfoDao
{
	public void saveStudentInfo(Student student)
	{
		String smuId = student.getSmuId();
		if (smuId == null) 
		smuId = hartUtil.getId();
		save(student);
	}
	
	@SuppressWarnings("unchecked")
	public List<Student> getAllStudentlist(String batch)
	{
		batch = batch.trim();
		if ("All".equals(batch))
		{
			Criteria criteria = getSession().createCriteria(Student.class);
	        return (List<Student>) criteria.list();
		}
		else
		{
		String queryStr ="from Student where batch = :batch";
		Query query = getSession().createQuery(queryStr);
		query.setParameter("batch", batch);
		query.setCacheable(true);
		return (List<Student>) query.list();
		}
	}

	public StudentSurveyJoin getStudentInfo(Student student) {
		String smuId = student.getSmuId();
		if (smuId == null) 
		smuId = hartUtil.getId();
		return get(StudentSurveyJoin.class, smuId);
	}
	
	@Autowired
	HartUtil hartUtil;

	@SuppressWarnings("unchecked")
	public List<Student> getAllStudents(String surveystatus) {
		surveystatus=surveystatus.trim();
		String querystr="";
		Query query;
		if ("".equals(surveystatus)){
			Criteria criteria = getSession().createCriteria(Student.class);
	        return (List<Student>) criteria.list();}
		else
		{
			querystr="from Student where surveyStatus=:surveystatus";
			query = getSession().createQuery(querystr);
			query.setParameter("surveystatus", surveystatus);
			query.setCacheable(true);
			return (List<Student>)query.list();
		}
		
		
		}

		public void saveCompetency(Competency comp) {
		save(comp);
	}

		public void savePrintFlag(Print print) {
			save(print);
		}

		@SuppressWarnings("unchecked")
		public List<String> getStudentGroups(StudentGroupList batchstudy) {
			String batch = batchstudy.getBatch();
			String study = batchstudy.getStudy();
			Query query;
			String querystr ="select distinct studentgroup from StudentGroupList where batch=:batch and study=:study ";
			query=getSession().createQuery(querystr);
			query.setParameter("batch", batch);
			query.setParameter("study", study);
			return (List<String>)query.list();
		}
}
