package com.hart.data;

import java.io.ByteArrayOutputStream;
import java.io.ObjectOutputStream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.hart.beans.StudentVideoResp;
import com.hart.beans.VideoRespfromFrontend;
import com.hart.util.HartUtil;
@Repository("studentVideoRespDao")
@Transactional

public class StudentVideoRespDaoImpl extends HartDao implements StudentVideoRespDao {

	public void saveVideoResp(VideoRespfromFrontend frontendVideoResp) throws Exception {
		StudentVideoResp svr = get(StudentVideoResp.class, hartUtil.getId());
		if (svr == null) {
			svr = new StudentVideoResp();
		svr.setSmu_id(hartUtil.getId());
		}
		int comp = frontendVideoResp.getCmp();
		int vno = frontendVideoResp.getVno();
		String text = frontendVideoResp.getText();
		String[] fulltext = null;
		fulltext = new String[4];
		fulltext[vno - 1] = text;
		ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
		ObjectOutputStream outputStream = new ObjectOutputStream(byteArrayOutputStream);
		outputStream.writeObject(fulltext);
		outputStream.flush();
		byteArrayOutputStream.flush();
		switch (comp) {
		case 1:
			svr.setSA(byteArrayOutputStream.toByteArray());
			break;
		case 2:
			svr.setIL(byteArrayOutputStream.toByteArray());
		case 3:
			svr.setEC(byteArrayOutputStream.toByteArray());
		case 4:
			svr.setRD(byteArrayOutputStream.toByteArray());
		case 5:
			svr.setDD(byteArrayOutputStream.toByteArray());
		case 6:
			svr.setEL(byteArrayOutputStream.toByteArray());
		case 7:
			svr.setDL(byteArrayOutputStream.toByteArray());
		case 8:
			svr.setCEP(byteArrayOutputStream.toByteArray());
		case 9:
			svr.setPS(byteArrayOutputStream.toByteArray());
		case 10:
			svr.setSP(byteArrayOutputStream.toByteArray());
		case 11:
			svr.setEI(byteArrayOutputStream.toByteArray());
		case 12:
			svr.setIS(byteArrayOutputStream.toByteArray());
		default:
			break;
		}
		byteArrayOutputStream.close();
		outputStream.close();
		save(svr);
	}
	@Autowired
	HartUtil hartUtil;
}
