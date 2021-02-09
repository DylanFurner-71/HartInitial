package com.hart.core;

import java.io.IOException;
import javax.servlet.http.HttpServletResponse;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.hart.beans.Competency;
import com.hart.beans.DebriefClassDate;
import com.hart.beans.Print;
import com.hart.beans.Student;
import com.hart.beans.StudentActionPlan;
import com.hart.beans.StudentGroupList;
import com.hart.beans.StudentGroups;
import com.hart.beans.StudentInitialResponse;
import com.hart.beans.StudentSurveyJoin;
import com.hart.beans.StudentSurveyStats;
import com.hart.beans.StudentVideoResp;
import com.hart.beans.SurveyResult;
import com.hart.beans.SurveyResultglpl;
import com.hart.beans.VideoRespfromFrontend;
import com.hart.data.AdminDao;
import com.hart.data.DebriefInfoDao;
import com.hart.data.ExcelExport;
import com.hart.data.ExcelImport;
import com.hart.data.ProcessSurveyResult;
import com.hart.data.ProfilePicDao;
import com.hart.data.StudentActionPlanDao;
import com.hart.data.StudentInfoDao;
import com.hart.data.StudentInitialRespDao;
import com.hart.data.StudentVideoRespDao;
import com.hart.data.SurveyResultsDao;
import com.hart.util.HartUtil;

//for test
@Transactional
@Controller
@Scope("request")
public class HartController {

	//temp sessionfactory for test
	@Autowired
	private SessionFactory sessionFactory;

	@RequestMapping(value = "/savesurveyresult", method = { RequestMethod.POST })
	public @ResponseBody Object saveSurveyResult(@RequestBody SurveyResult surveyResult) {
		surveyResult.setSmuId(hartUtil.getId());
		surveyResultsDao.saveSurveyResult(surveyResult);
		return "{\"status\": 0}";
	}

	@RequestMapping(value = "/savesurveyresultglpl", method = { RequestMethod.POST })
	public @ResponseBody Object saveSurveyResultglpl(@RequestBody SurveyResultglpl gLpL) {
		gLpL.setSmuId(hartUtil.getId());
		surveyResultsDao.saveSurveyResultglpl(gLpL);
		return "{\"status\": 0}";
	}
	
	@RequestMapping(value = "/savecompetency", method = { RequestMethod.POST })
	public @ResponseBody Object saveCompetency(@RequestBody Competency comp) {
		comp.setSmuId(hartUtil.getId());
		studentInfoDao.saveCompetency(comp);
		return "{\"status\": 0}";
	}

	@RequestMapping(value = "/getstudentsperbatch", method = { RequestMethod.POST })
	public @ResponseBody Object getStudentlist(@RequestBody String batch) {
		StudentGroups studentGroups = new StudentGroups();
		studentGroups.setStudents(studentInfoDao.getAllStudentlist(batch));
		return studentGroups;
	}

	@RequestMapping(value = "/isadmin", method = { RequestMethod.POST })
	public @ResponseBody Object isAdmin() {
		return adminDao.isAdmin(hartUtil.getId());
	}

	@RequestMapping(value = "/checkadmin", method = { RequestMethod.POST })
	public @ResponseBody String checkAdmin() {
		if (!adminDao.isAdmin(hartUtil.getId())) {
			try {
				httpServletResponse.sendError(HttpServletResponse.SC_FORBIDDEN);
				return null;
			} catch (IOException e) {

			}
		}

		return "{\"firstname\":\"" + adminDao.getAdminname(hartUtil.getId()).toString() + "\"}";

	}

	@RequestMapping(value = "/loadstudentbatch", method = { RequestMethod.POST })
	public @ResponseBody Object loadStudentBatch() {
		if (!adminDao.isAdmin(hartUtil.getId())) {
			try {
				httpServletResponse.sendError(HttpServletResponse.SC_FORBIDDEN);
				return null;
			} catch (IOException e) {
			}
		}
		return adminDao.getStudentBatches();
	}
	
	@RequestMapping(value = "/getstudentgroups", method = { RequestMethod.POST })
	public @ResponseBody Object getStudentGroups(@RequestBody StudentGroupList batchandstudy) {
		return studentInfoDao.getStudentGroups(batchandstudy);
	}

	

	@RequestMapping(value = "/getsurveyresult", method = { RequestMethod.POST })
	public @ResponseBody Object getSurveyResult(@RequestBody SurveyResult surveyResult) {
		return surveyResultsDao.getSurveyResult(surveyResult);
	}

	@RequestMapping(value = "/getStudents", method = { RequestMethod.GET })
	public void getStudents(@RequestParam("surveyStatus") String surveystatus) {
			excelExport.process(surveystatus);
	}

	/*@RequestMapping(value = "/updatethankyounote", method = { RequestMethod.POST })
	public @ResponseBody Object saveThankyounote(@RequestBody ThankyouNote classnote) {
		if (classnote.getThankyounote().length()<=2500)
		debriefInfoDao.saveThankyounote(classnote);
		else
		return "{\"status\": -1}";
		return "{\"status\": 0}";
		}*/
	@RequestMapping(value = "/updatedebriefdatenote", method = { RequestMethod.POST })
	public @ResponseBody Object savedebriefdate(@RequestBody DebriefClassDate classdate) {
		debriefInfoDao.saveDebriefInfo(classdate);
		return "{\"status\": 0}";
	}
	
	@RequestMapping(value = "/getstudentinfo", method = { RequestMethod.POST })
	public @ResponseBody Object getStudentInfo(@RequestBody Student student) {
		StudentSurveyJoin studentinfo = studentInfoDao.getStudentInfo(student);
		if (studentinfo == null) {
			try {
				httpServletResponse.sendError(HttpServletResponse.SC_FORBIDDEN);
				return null;
			} catch (IOException e) {
			}
		}
		return studentinfo;

	}

	@RequestMapping(value = "/savestudentinfo", method = { RequestMethod.POST })
	public @ResponseBody Object saveStudentInfo(@RequestBody Student student) {
		// student.setSmuId(hartUtil.getId());
		studentInfoDao.saveStudentInfo(student);
		return "{\"status\": 0}";
	}

	@RequestMapping(value = "/savestudentinitialresp", method = { RequestMethod.POST })
	public @ResponseBody Object saveStudentInitialResp(@RequestBody StudentInitialResponse studentinitialresponse) {
		studentinitialresponse.setSmuId(hartUtil.getId());
		studentInitialRespDao.saveStudentInitialResp(studentinitialresponse);
		return "{\"status\": 0}";
	}

	@RequestMapping(value = "/getstudentinitialresp", method = { RequestMethod.POST })
	public @ResponseBody Object getStudentInitialResp() {
		return studentInitialRespDao.getStudentInitialResp(hartUtil.getId());
	}

	@RequestMapping(value = "/uploadexcel", method = RequestMethod.POST)
	public @ResponseBody Object upload(@RequestParam("file") MultipartFile file,
			@RequestParam("term") String term,@RequestParam("studentgroup") String studentgroup
			,@RequestParam("study") String study) {
		String retVal = "{\"status\": 0}";
		try {
			excelImport.process(term,studentgroup,study,file);
		} catch (Exception e) {
			retVal = "{\"status\": 1, " + "\"error\": \"" + e.getMessage() + "\"}";
		}
		return retVal;
	}

	@RequestMapping(value = "/updateprofilepic", method = RequestMethod.POST)
	public @ResponseBody Object updateProfilePic(@RequestParam("file") byte[] file) {
		String retVal = "{\"status\": 0}";
		try {
			profilePicDao.save(hartUtil.getId(), file);
		} catch (Exception e) {
			retVal = "{\"status\": 1, " + "\"error\": \"" + e.getMessage() + "\"}";
		}
		return retVal;
	}

	@RequestMapping(value = "/getprofilepic", method = RequestMethod.GET, produces = MediaType.IMAGE_PNG_VALUE)
	public void getProfilePic() {
		try {
			httpServletResponse.getOutputStream().write(profilePicDao.get(hartUtil.getId()));
			httpServletResponse.getOutputStream().flush();
			httpServletResponse.getOutputStream().close();
		} catch (Exception e) {
			e.printStackTrace();;
		}
	}
	
	@RequestMapping(value = "/getdebriefdatenote", method = { RequestMethod.POST })
	public @ResponseBody DebriefClassDate getDebriefInfo(@RequestBody DebriefClassDate inputs) {

		return debriefInfoDao.getDebriefInfo(inputs) ;
	}
	
	
	@RequestMapping(value = "/setprintflag", method = { RequestMethod.POST })
	public @ResponseBody Object setPrintFlag(@RequestBody Print[] printflag) {
		for (Print print:printflag)
		{	
		print.setPrint(true);
		studentInfoDao.savePrintFlag(print);
		}
		return "{\"status\": 0}";
	}
	
	@RequestMapping(value = "/getavgscores", method = { RequestMethod.POST })
	public @ResponseBody int[] getavgscores(@RequestBody StudentSurveyStats statinputs){
		
			return processSurveyResult.processSurveyResult(statinputs) ;
	}

	@RequestMapping(value = "/test", method = { RequestMethod.GET })
	public @ResponseBody Object test() {
		return "{Hello}";
	}

	@RequestMapping(value = "/savestudentactionplan", method = { RequestMethod.POST })
	public @ResponseBody Object saveStudentActionPlan(@RequestBody StudentActionPlan studentActionPlan) {
		studentActionPlan.setSmu_id(hartUtil.getId());
		studentActionPlanDao.saveStudentActionPlan(studentActionPlan);
		return "{\"status\": 0}";
	}

	@RequestMapping(value = "/getstudentactionplan", method = { RequestMethod.POST })
	public @ResponseBody Object getStudentActionPlan() {
		return studentActionPlanDao.getStudentActionPlan(hartUtil.getId());
	}
	
	@RequestMapping(value = "/savevideoresp", method = { RequestMethod.POST })
	public @ResponseBody Object saveVideoResp(@RequestBody VideoRespfromFrontend frontendVideoResp) {
		try {
			studentVideoRespDao.saveVideoResp(frontendVideoResp);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "{\"status\": 0}";
	}

	//test API
	@RequestMapping(value = "/getresp", method = { RequestMethod.POST })
	public @ResponseBody Object getResp(@RequestBody SurveyResult surveyResult) {
		return (StudentInitialResponse)sessionFactory.getCurrentSession().get(StudentInitialResponse.class, hartUtil.getId());
	}

	@Autowired
	StudentVideoRespDao studentVideoRespDao;

	@Autowired
	SurveyResultsDao surveyResultsDao;

	@Autowired
	StudentInfoDao studentInfoDao;

	@Autowired
	StudentInitialRespDao studentInitialRespDao;

	@Autowired
	AdminDao adminDao;

	@Autowired
	HttpServletResponse httpServletResponse;

	@Autowired
	HartUtil hartUtil;

	@Autowired
	ExcelImport excelImport;

	@Autowired
	DebriefInfoDao debriefInfoDao;
	
	@Autowired
	ExcelExport excelExport;
	
	@Autowired
	ProcessSurveyResult processSurveyResult;
	
	@Autowired
	StudentActionPlanDao studentActionPlanDao;
	
	@Autowired
	ProfilePicDao profilePicDao;
}
