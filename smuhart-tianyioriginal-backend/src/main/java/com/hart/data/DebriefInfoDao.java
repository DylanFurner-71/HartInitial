package com.hart.data;

import com.hart.beans.DebriefClassDate;

public interface DebriefInfoDao {
	void saveDebriefInfo(DebriefClassDate classdate);
	DebriefClassDate getDebriefInfo(DebriefClassDate yearInSchool);
	
}
