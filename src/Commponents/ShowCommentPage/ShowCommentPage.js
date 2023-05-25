import { Col, Layout, Row, Rate, Button, Radio, Card } from "antd";
import styles from "./ShowCommentPage.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { NewOrder } from "../NewOrder/NewOrder";
import { CommentPage } from "../Comment/CommentPage";
import { ShowCommentCard } from "./ShowCommentCard";

const { Header, Content, Footer, Sider } = Layout;


export const ShowCommentPage = () => {
  const [showNewOrder, setShowNewOrder] = useState(false);
  const [commentDetail, setCommentDetail] = useState();

  //测试获取评价的数组
  useEffect(() => {
    axios({
      method: 'get',
      url: "http://localhost:8051/eval/get",
      params: {
        server: 1
      }
    })
      .then(function (res) {
        setCommentDetail(res.data.data)
        console.log(res.data.data);
      })
      .catch(function (err) {
        console.log(err);
      })
  }, [])

  const showNewOrderHandler = () => {
    setShowNewOrder((prevState) => !prevState);
  };

  const [showCommentPage, setShowCommentPage] = useState(false);
  const showCommentPageHandler = () => {
    setShowCommentPage((prevState) => !prevState);
  };

  const releasedOrderNum = 4;
  const acceptedOrderNum = 11;

  const [showContent, setShowContent] = useState(1);

  const selectContentHandler = (e) => {
    console.log(e.target.value);
    setShowContent(e.target.value);
  };

  const CommentedBox = () => {
    return (
      <div className={styles.contentBox1}>
        <ShowCommentCard />
        <ShowCommentCard />
        <ShowCommentCard />
        <ShowCommentCard />
        <ShowCommentCard />

      </div>
    );
  };



  return (
    <>
      <Layout>
        <Header className={styles.personalHeader}>
          <div>logo</div>
        </Header>

        <Content className={styles.contentStyle}>
          <div className={styles.contentBox}>
            <div className={styles.infoBox}>
              <img src="头像1.png" className={styles.userAvatar} />
              <div className={styles.basicInfo}>
                <Row>
                  <Col span={6}>用户名</Col>
                  <Col span={18}>吃葡萄不吐葡萄皮</Col>
                </Row>
                <Row>
                  <Col span={6}>评分</Col>
                  <Col span={18}>
                    <Rate disabled defaultValue={2} />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    发布订单{releasedOrderNum}个，接受订单{acceptedOrderNum}个。
                  </Col>
                </Row>
              </div>
            </div>

            <div className={styles.orderBox}>
              <div className={styles.selectNav}>对TA的评价</div>
              <CommentedBox />
            </div>
          </div>
        </Content>
      </Layout>
      {showNewOrder && <NewOrder showCard={showNewOrderHandler} />}
      {showCommentPage && <CommentPage showCard={showCommentPageHandler} />}
    </>
  );
};
