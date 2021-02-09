package com.hart.data;

import java.util.List;
import org.hibernate.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hart.beans.StudentSurveyStats;

@Repository("processSurveyResult")
@Transactional
public class ProcessSurveyResultImpl extends HartDao implements ProcessSurveyResult {
	@SuppressWarnings("unchecked")
	public int[] processSurveyResult(StudentSurveyStats statinputs) {
		int avgvalues[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 };
		try {
			String batch = statinputs.getBatch().trim();
			String study = null;
			if (statinputs.getStudy() != null)
				study = statinputs.getStudy().trim();
			String yearInSchool = null;
			if (statinputs.getYearInSchool() != null)
				yearInSchool = statinputs.getYearInSchool().trim();
			String queryStr = "from StudentSurveyStats";
			if (!(batch == null || "".equals(batch) || "All".equals(batch))) {
				queryStr += " where batch=:batch";
			}
			if (!(study == null || "".equals(study) || "All".equals(study))) {
				queryStr += " and study=:study";
			}
			if (!(yearInSchool == null || "".equals(yearInSchool) || "All".equals(yearInSchool))) {
				queryStr += " and yearInSchool=:yearInSchool";
			}
			System.out.println(queryStr);
			Query qry = getSession().createQuery(queryStr);
			if (!(batch == null || "".equals(batch) || "All".equals(batch))) {
				qry.setParameter("batch", batch);
			}
			if (!(study == null || "".equals(study) || "All".equals(study))) {
				qry.setParameter("study", study);
			}
			if (!(yearInSchool == null || "".equals(yearInSchool) || "All".equals(yearInSchool))) {
				qry.setParameter("yearInSchool", yearInSchool);
			}
			List<StudentSurveyStats> surveyResultList = (List<StudentSurveyStats>) qry.list();
			int selfawarescore = 0;
			int Intentlearnscore = 0;
			int commscore = 0;
			int reldevscore = 0;
			int diverdiffscore = 0;
			int engleadershipscore = 0;
			int directleadershipscore = 0;
			int champeffprocessscore = 0;
			int probsolvscore = 0;
			int stategicpersscore = 0;
			int ethicsIntegritysscore = 0;
			int innovspiritscore = 0;
			int count = 0;

			for (StudentSurveyStats result : surveyResultList) {
				if (result.getSurvey_Resp() != null && result.getSurvey_Resp().length() > 0) {
					count++;
					String[] resultarray = result.getSurvey_Resp().split("[,]");
					int selfawarelocal = Integer.parseInt(resultarray[2]) + Integer.parseInt(resultarray[5])
							+ Integer.parseInt(resultarray[8]) + Integer.parseInt(resultarray[11])
							+ Integer.parseInt(resultarray[14]);
					selfawarescore += selfawarelocal;

					int illocal = Integer.parseInt(resultarray[17]) + Integer.parseInt(resultarray[20])
							+ Integer.parseInt(resultarray[23]) + Integer.parseInt(resultarray[26])
							+ Integer.parseInt(resultarray[29]);
					Intentlearnscore += illocal;

					int comlocal = Integer.parseInt(resultarray[24]) + Integer.parseInt(resultarray[29])
							+ Integer.parseInt(resultarray[44]) + Integer.parseInt(resultarray[74])
							+ Integer.parseInt(resultarray[89]);
					commscore += comlocal;

					int rdlocal = Integer.parseInt(resultarray[32]) + Integer.parseInt(resultarray[35])
							+ Integer.parseInt(resultarray[38]) + Integer.parseInt(resultarray[41])
							+ Integer.parseInt(resultarray[44]);
					reldevscore += rdlocal;

					int ddlocal = Integer.parseInt(resultarray[47]) + Integer.parseInt(resultarray[50])
							+ Integer.parseInt(resultarray[53]) + Integer.parseInt(resultarray[56])
							+ Integer.parseInt(resultarray[59]);
					diverdiffscore += ddlocal;

					int ellocal = Integer.parseInt(resultarray[62]) + Integer.parseInt(resultarray[65])
							+ Integer.parseInt(resultarray[68]) + Integer.parseInt(resultarray[71])
							+ Integer.parseInt(resultarray[74]);
					engleadershipscore += ellocal;

					int dllocal = Integer.parseInt(resultarray[77]) + Integer.parseInt(resultarray[80])
							+ Integer.parseInt(resultarray[83]) + Integer.parseInt(resultarray[86])
							+ Integer.parseInt(resultarray[89]);
					directleadershipscore += dllocal;

					int ceplocal = Integer.parseInt(resultarray[92]) + Integer.parseInt(resultarray[95])
							+ Integer.parseInt(resultarray[98]) + Integer.parseInt(resultarray[101])
							+ Integer.parseInt(resultarray[104]);
					champeffprocessscore += ceplocal;

					int pslocal = Integer.parseInt(resultarray[107]) + Integer.parseInt(resultarray[110])
							+ Integer.parseInt(resultarray[113]) + Integer.parseInt(resultarray[116])
							+ Integer.parseInt(resultarray[119]);
					probsolvscore += pslocal;

					int splocal = Integer.parseInt(resultarray[122]) + Integer.parseInt(resultarray[125])
							+ Integer.parseInt(resultarray[128]) + Integer.parseInt(resultarray[131])
							+ Integer.parseInt(resultarray[134]);
					stategicpersscore += splocal;

					int eilocal = Integer.parseInt(resultarray[137]) + Integer.parseInt(resultarray[140])
							+ Integer.parseInt(resultarray[143]) + Integer.parseInt(resultarray[146])
							+ Integer.parseInt(resultarray[149]);
					ethicsIntegritysscore += eilocal;

					int islocal = Integer.parseInt(resultarray[152]) + Integer.parseInt(resultarray[155])
							+ Integer.parseInt(resultarray[158]) + Integer.parseInt(resultarray[161])
							+ Integer.parseInt(resultarray[164]);
					innovspiritscore += islocal;

					/*
					 * System.out.println("smuid--"+result.getSmuId());
					 * System.out.println("sa--"+selfawarelocal);
					 * System.out.println("IL--"+illocal);
					 * System.out.println("com--"+comlocal);
					 * System.out.println("RD--"+rdlocal);
					 * System.out.println("dd--"+ddlocal);
					 * System.out.println("el--"+ellocal);
					 * System.out.println("dl--"+dllocal);
					 * System.out.println("cep--"+ceplocal);
					 * System.out.println("ps--"+pslocal);
					 * System.out.println("sp--"+splocal);
					 * System.out.println("ei--"+eilocal);
					 * System.out.println("is--"+islocal);
					 */
				}
			}
			if (count > 0) {
				avgvalues[0] = selfawarescore / count;
				avgvalues[1] = Intentlearnscore / count;
				avgvalues[2] = commscore / count;
				avgvalues[3] = reldevscore / count;
				avgvalues[4] = diverdiffscore / count;
				avgvalues[5] = engleadershipscore / count;
				avgvalues[6] = directleadershipscore / count;
				avgvalues[7] = champeffprocessscore / count;
				avgvalues[8] = probsolvscore / count;
				avgvalues[9] = stategicpersscore / count;
				avgvalues[10] = ethicsIntegritysscore / count;
				avgvalues[11] = innovspiritscore / count;
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
		return avgvalues;

	}

}
