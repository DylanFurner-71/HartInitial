package com.hart.data;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hart.beans.SurveyResponse;
import com.hart.beans.SurveyResult;
import com.hart.beans.SurveyResultglpl;
import com.hart.util.HartUtil;

@Repository("surveyResultsDao")
@Transactional
public class SurveyResultsDaoImpl extends HartDao implements SurveyResultsDao {
	public void saveSurveyResult(SurveyResult surveyResult) {
		surveyResult.setSurveydate(new SimpleDateFormat("MM/dd/yyyy").format(new Date()));
		save(surveyResult);
	}

	public SurveyResponse getSurveyResult(SurveyResult surveyResult) {
		String smuId=surveyResult.getSmuId();
		if (smuId==null)
			smuId=hartUtil.getId();
		return get(SurveyResponse.class, smuId);
	}


	public void saveSurveyResultglpl(SurveyResultglpl gLpL) {
		save(gLpL);
		
	}
	
	
	@Autowired
	HartUtil hartUtil;
}
