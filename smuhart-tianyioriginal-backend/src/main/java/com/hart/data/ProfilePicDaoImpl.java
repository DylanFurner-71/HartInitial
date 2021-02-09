package com.hart.data;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.hart.beans.ProfilePic;

@Repository("profilePicDao")
@Transactional

public class ProfilePicDaoImpl extends HartDao implements ProfilePicDao {

	public void save(String smuId, byte[] file) throws Exception {
		ProfilePic profilePic = new ProfilePic();
		profilePic.setSmuId(smuId);
		profilePic.setPhoto(file);
		save(profilePic);
	}

	public byte[] get(String smuId) {
		return get(ProfilePic.class, smuId).getPhoto();
	}

}
