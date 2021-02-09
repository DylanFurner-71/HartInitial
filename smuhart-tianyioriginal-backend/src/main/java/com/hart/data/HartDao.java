package com.hart.data;

import java.io.Serializable;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class HartDao
{
	@Autowired
    private SessionFactory sessionFactory;
 
    protected Session getSession() {
        return sessionFactory.getCurrentSession();
    }
 
    public void save(Object entity) {
        getSession().saveOrUpdate(entity);
    }
 
    public void delete(Object entity) {
        getSession().delete(entity);
    }
    
    public <T> T get (Class<T> clazz, Serializable id) {
    	return getSession().get(clazz, id);
    }
}
