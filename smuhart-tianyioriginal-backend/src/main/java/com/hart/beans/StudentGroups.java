package com.hart.beans;

import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class StudentGroups {
	List<Student> students;
	Set<String> groups;

	public List<Student> getStudents() {
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}

	public Set<String> getGroups() {
		groups = new TreeSet<String>();
		for (Student student : students) {
			if (student.getStudentgroup() != null && student.getStudentgroup().length()>0)
				groups.add(student.getStudentgroup());
		}
		return groups;
	}

	public void setGroups(Set<String> groups) {
		this.groups = groups;
	}

}
