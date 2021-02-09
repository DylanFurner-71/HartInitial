package com.hart.data;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hart.beans.DebriefClassDate;

@Repository("debriefInfoDao")
@Transactional
public class DebriefInfoDaoImpl extends HartDao implements DebriefInfoDao {

	public void saveDebriefInfo(DebriefClassDate classdate) {
		classdate.setId(null);
		save(classdate);
	}

	public DebriefClassDate getDebriefInfo(DebriefClassDate yearInSchool) {
		return get(DebriefClassDate.class, yearInSchool.getId());
	}

	
}
