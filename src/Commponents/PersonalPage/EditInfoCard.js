import styles from "./EditInfoCard.module.css";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import { Row, Input, Col, Upload,Button } from "antd";
import { useState } from "react";

export default function EditInfoCard(params) {
  const [piclist, setPiclist] = useState([]);
  const setFileChange = (info) => {
    setPiclist(info.fileList);
  };
  return (
    <div className={styles.maskbox}>
      <div className={styles.commentCard}>
        <div className={styles.closeBox}>
          <div className={styles.titleBox}>编辑资料</div>
          <button className={styles.cardCloseBtn} onClick={params.showEditCard}>
            <CloseOutlined />
          </button>
        </div>
        <div className={styles.commentBox}>
          <Row>
            <Col span={6} style={{fontWeight: 'bolder'}}>用户名</Col>
            <Col span={12}>
              <Input defaultValue="吃葡萄不吐葡萄皮" placeholder="用户名不能为空！"/>
            </Col>
          </Row>
          <Row>
            <Col span={6} style={{fontWeight: 'bolder'}}>上传头像</Col>
            <Col span={18}>
              <Upload onChange={setFileChange}>
                <Button icon={<UploadOutlined />}>点击上传</Button>
              </Upload>
            </Col>
          </Row>
          <div className={styles.submitBtnBox}>
          <Button style={{width: '7vw'}}>提交</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
