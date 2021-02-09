package com.hart.util;
import java.util.Date;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect @Component
public class LoggingAspect
{
	@Before("execution(* com.hart..*.*(..))") 
	void enteringMethod (JoinPoint jp){
		System.out.println(getDate() + " : Entering  --> "+jp.getSignature());
	}
	@AfterReturning("execution(* com.hart..*.*(..))") 
	void returningMethod (JoinPoint jp){
		System.out.println(getDate() + " : Done with --> "+jp.getSignature());
	}
	@AfterThrowing(pointcut = "execution(* com.hart..*.*(..))", throwing = "throwable") 
	void failedInMethod (JoinPoint jp, Throwable throwable){
		System.err.println(getDate() + " : Failed in --> "+jp.getSignature());
		System.err.println(throwable.getMessage());
		System.err.println(throwable.getCause());
		throwable.printStackTrace();
	}
	
	String getDate () {
		return new Date().toString();
	}
}
