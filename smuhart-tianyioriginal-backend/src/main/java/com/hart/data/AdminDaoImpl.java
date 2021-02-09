package com.hart.data;

import java.util.List;

import org.hibernate.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hart.beans.Admin;

@Repository("adminDao")
@Transactional
public class AdminDaoImpl extends HartDao implements AdminDao
{
	public Boolean isAdmin(String smuId)
	{
		Admin admin = null;
		admin = get(Admin.class, smuId);
		return admin != null;
	}

	public List<?> getStudentBatches() {
		String queryStr = "select distinct batch from AdminStudentLoad";
		Query query = getSession().createQuery(queryStr);
		query.setCacheable(true);
		return query.list();
	}

	public String getAdminname(String smuId) {
		Admin admin =null;
		admin =get(Admin.class,smuId);
		return admin.firstname;
		
	}
	
}
