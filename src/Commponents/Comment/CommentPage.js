import styles from "./CommentPage.module.css";
import { Row, Col, Upload, message, Button, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

export const CommentPage = () => {
  const [score, setScore] = useState(0);
  const statementRef = useRef(null);

  const [picture, setPicture] = useState("");
  const [video, setVideo] = useState("");
  const [cnt, setCnt] = useState(1);

  const uploadProps = {
    onChange(info) {
      // 获取文件名用于造假
      // console.log(info.file.name);
      if (info.file.status === "error") {
        setCnt(cnt + 1);
        if (picture === "") {
          setPicture(picture + "./" + info.file.name);
        } else {
          setPicture(picture + "-" + "./" + info.file.name);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.success(`${info.file.name} file uploaded successfully`);
        }
      }
    },
    showUploadList: false,
  };

  // 获取到评分
  const getScore = (event) => {
    console.log(event);
    setScore(event);
  };

  // 按回车获取评论内容
  const getText = (event) => {
    console.log(event.target.value);
  };

  const goBack = () => {
    window.history.back();
  };

  const submitComment = () => {
    var statement1 = statementRef.current.resizableTextArea.textArea.value;
    console.log(statement1);
    console.log(score);
    // console.log(picture);
    // axios({
    //     method: 'post',
    //     url: "http://localhost:8080/guest/evaluate",
    //     headers: {
    //         'Content-Type': 'application/json',
    //         token: localStorage.getItem('token')
    //     },
    //     params: {
    //         statement: statement1,
    //         score: score,
    //         picture: picture,
    //         video: video,
    //         recordId: recordId
    //     }
    // })
    //     .then(function (res) {
    //         console.log(res);
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     })
  };

  return (
    <div className={styles.maskbox}>
      <div className={styles.commentCard}>
        <div className={styles.closeBox}>
          <button className={styles.cardCloseBtn} onClick={goBack}>
            <CloseOutlined />
          </button>
        </div>
        <div className={styles.commentBox}>
          <Row>
            <Col span={6}>
              <div className={styles.commentTitle}>评分</div>
            </Col>
            <Col span={18}>
              <div className={styles.scoreBox}>
                {/* <Slider max={10} min={0} defaultValue={10} className={styles.scoreSlider} onAfterChange={getScore}/> */}
                <Rate defaultValue={5} allowHalf onChange={getScore} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={6} className={styles.commentTitle1}>
              <span>评价</span>
            </Col>
            <Col span={18}>
              <TextArea
                maxLength={100}
                showCount
                className={styles.commentText}
                placeholder="请输入评价(100字以内)"
                onPressEnter={getText}
                ref={statementRef}
              ></TextArea>
            </Col>
          </Row>

          <Row>
            <Col span={6} className={styles.commentTitle}>
              <span>上传图片</span>
            </Col>
            <Col span={18}>
              <div className={styles.scoreBox}>
                <Upload {...uploadProps}>
                  <Button icon={<UploadOutlined />}>点击上传</Button>
                </Upload>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className={styles.commentSubmit} onClick={submitComment}>
                <Button>提交</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
