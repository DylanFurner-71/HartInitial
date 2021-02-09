package com.hart.util;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.Base64;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class HartUtil {
	public String getId() {
		String authHeader = httpServletRequest.getHeader("authorization");
		String encodedValue = authHeader.split(" ")[1];
		String decodedValue = new String(Base64.getDecoder().decode(encodedValue), Charset.forName("UTF-8"))
				.split("[:]")[0];

		try {
			Integer.parseInt(decodedValue);
		} catch (Exception e) {
			try {

				httpServletResponse.sendError(HttpServletResponse.SC_FORBIDDEN);
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
		}
		return decodedValue.trim();

	}

	@Autowired
	HttpServletRequest httpServletRequest;
	@Autowired
	HttpServletResponse httpServletResponse;
}
