package com.hart.data;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hart.beans.Student;
import com.hart.util.Constants;

@Component("excelExport")
public class ExcelExportImpl implements ExcelExport {

	public void process(String surveyStatus) {
		FileInputStream fileInputStream = null;
		Workbook workbook = null;
		OutputStream outputStream = null;
		try {
			String filePath = this.getClass().getClassLoader().getResource("").getPath()+"../../files/";
			//filePath = "C:/Users/Rashmi/Documents/Rashmi MS/Semester 1/job/hart/src/main/webapp/files/";
			System.out.println(filePath+"Student_export.xlsx");
			fileInputStream = new FileInputStream(filePath+"Student_export.xlsx");
			workbook = new XSSFWorkbook(fileInputStream);
			Sheet sheet = workbook.getSheetAt(0);
			List<Student> students = studentInfoDao.getAllStudents(surveyStatus);
			int counter = 0;
			for (Student student:students) {
				counter++;
				Row row = sheet.createRow(counter);
				row.createCell(0).setCellValue(student.getSmuId());
				row.createCell(1).setCellValue(student.getLastname());
				row.createCell(2).setCellValue(student.getFirstName());
				row.createCell(3).setCellValue(student.getPreferredName());
				row.createCell(4).setCellValue(student.getEmail());
				if (student.getYearInSchool()!=null && student.getYearInSchool().length()>0)
				row.createCell(5).setCellValue(Constants.yearsInSchool[Integer.parseInt(student.getYearInSchool())]);
				if(student.getMajor()!=null)
				row.createCell(6).setCellValue(Constants.majorStr[student.getMajor()]);
				row.createCell(7).setCellValue(student.getOtherMajor());
				row.createCell(8).setCellValue(student.getBatch());
				if(student.getSurveyStatus()!=null && student.getSurveyStatus().length()>0)
				row.createCell(9).setCellValue(Constants.surveyStatusStr[Integer.parseInt(student.getSurveyStatus())]);
				row.createCell(10).setCellValue(Constants.study[Integer.parseInt(student.getStudy())]);
				row.createCell(11).setCellValue(student.getStudentgroup());
				/*row.createCell(12).setCellValue(student.getHighestCompetency());
				row.createCell(13).setCellValue(student.getLowestCompetency());*/
				row.createCell(14).setCellValue(student.getCompetency1());
				row.createCell(15).setCellValue(student.getCompetency2());
								
			}
			outputStream = httpServletResponse.getOutputStream();
			workbook.write(outputStream);
			outputStream.flush();
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			try {
				fileInputStream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
			try {
				outputStream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
			try {
				workbook.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	
	@Autowired HttpServletResponse httpServletResponse;
	@Autowired StudentInfoDao studentInfoDao;

}
