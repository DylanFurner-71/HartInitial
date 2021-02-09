package com.hart.data;



import com.hart.beans.SurveyResponse;
import com.hart.beans.SurveyResult;
import com.hart.beans.SurveyResultglpl;

public interface SurveyResultsDao
{
	void saveSurveyResult(SurveyResult surveyResult);
	
	SurveyResponse getSurveyResult (SurveyResult surveyResult);
	
	void saveSurveyResultglpl (SurveyResultglpl gLpL);
	
	
}
