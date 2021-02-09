package com.hart.data;

import org.springframework.web.multipart.MultipartFile;

public interface ExcelImport {

    public void process(String term,String group,String study, MultipartFile file) throws Exception;
}