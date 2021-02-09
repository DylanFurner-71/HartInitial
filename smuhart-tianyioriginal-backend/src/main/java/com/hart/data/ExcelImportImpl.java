package com.hart.data;

import java.io.ByteArrayInputStream;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.hart.beans.Student;

@Component("excelImport")
public class ExcelImportImpl implements ExcelImport {

	public void process(String term, String studentgroup, String study, MultipartFile file) throws Exception {

		ByteArrayInputStream bis = new ByteArrayInputStream(file.getBytes());
		Workbook workbook = null;
		try {
			if (file.getOriginalFilename().endsWith("xls")) {
				workbook = new HSSFWorkbook(bis);
			} else if (file.getOriginalFilename().endsWith("xlsx")) {
				workbook = new XSSFWorkbook(bis);
			} else {
				throw new IllegalArgumentException("Please use xls or xlsx file.");
			}

			Sheet sheet = workbook.getSheetAt(0);
			int recordcount = 0;
			for (Row row : sheet) {
				recordcount++;
				if (row.getRowNum() == 0) {

					boolean flagged = false;
					if (!"SMU ID".equals(row.getCell(0).getStringCellValue()))
						flagged = true;
					else if (!"Last Name".equals(row.getCell(1).getStringCellValue()))
						flagged = true;
					else if (!"First Name".equals(row.getCell(2).getStringCellValue()))
						flagged = true;
					else if (!"SMU_Email".equals(row.getCell(3).getStringCellValue()))
						flagged = true;
					if (flagged)
						throw new IllegalArgumentException("Invalid file format");
				}

				if (row.getRowNum() > 0) {
					int id = (int) row.getCell(0).getNumericCellValue();
					if (id == 0)
						break;
					String smuId = Integer.toString(id);
					int ctr = 8 - smuId.length();
					if (smuId.length() < 8) {
						for (int i = 0; i < ctr; i++) {
							smuId = "0" + smuId;
						}
					}
					String lastName = row.getCell(1).getStringCellValue();
					String firstName = row.getCell(2).getStringCellValue();
					String email = row.getCell(3).getStringCellValue();
					String gender = "M";// row.getCell(9).getStringCellValue();
					String surveystatus = "1";
					String competency1 = "";
					String competency2 = "";
					Boolean addedcompetency = false;
					/*
					 * String ethnicity = row.getCell(18).getStringCellValue();
					 * String phone = row.getCell(19).getStringCellValue();
					 */
					Student student = new Student();
					student.setSmuId(smuId);
					student.setLastname(lastName);
					student.setFirstName(firstName);
					// student.setEthnicity(ethnicity);
					student.setGender(gender);
					student.setSurveyStatus(surveystatus);
					// student.setPhonenumber(phone);*/
					student.setEmail(email);
					student.setBatch(term);
					student.setStudentgroup(studentgroup);
					student.setStudy(study);
					student.setCompetency1(competency1);
					student.setCompetency2(competency2);
					student.setAddedcompetency(addedcompetency);
					studentInfoDao.saveStudentInfo(student);
				}
			}
			if (recordcount == 0)
				throw new IllegalArgumentException("No records found. Please upload proper file");
		} finally {
			if (workbook != null)
				workbook.close();
			bis.close();
		}
	}

	@Autowired
	StudentInfoDao studentInfoDao;

	@Autowired
	HttpServletResponse httpServletResponse;
}
