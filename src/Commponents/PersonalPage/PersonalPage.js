import { Col, Layout, Row, Rate, Button, Radio } from "antd";
import styles from "./PersonalPage.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { OrderCard } from "../MainPage/OrderCard";

const { Header, Content, Footer, Sider } = Layout;

export const PersonalPage = () => {
  const releasedOrderNum = 4;
  const acceptedOrderNum = 11;

  const [showContent, setShowContent] = useState(1);

  const selectContentHandler = (e) => {
    console.log(e.target.value);
    setShowContent(e.target.value);
  };

  const MyReleasedBox = () => {
    return (
      <div className={styles.contentBox1}>
        <Row gutter={16}>
          <Col span={8}><OrderCard /></Col>
          <Col span={8}><OrderCard /></Col>
          <Col span={8}><OrderCard /></Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}><OrderCard /></Col>
          <Col span={8}><OrderCard /></Col>
          <Col span={8}><OrderCard /></Col>
        </Row>
      </div>
    );
  };

  const ReleasedCard = () => {
    return <div></div>;
  };

  const CommentedBox = () => {
    return <div className={styles.contentBox1}>222</div>;
  };

  const ToCommentBox = () => {
    return <div className={styles.contentBox1}>333</div>;
  };

  return (
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
            <Button className={styles.releaseBtn}>
              <PlusOutlined /> 发布订单
            </Button>
          </div>

          <div className={styles.orderBox}>
            <div className={styles.selectNav}>
              <Radio.Group onChange={selectContentHandler} defaultValue={1}>
                <Radio.Button value={1}>我的发布</Radio.Button>
                <Radio.Button value={2}>已评价的订单</Radio.Button>
                <Radio.Button value={3}>未评价的订单</Radio.Button>
              </Radio.Group>
            </div>
            {showContent === 1 ? (
              <MyReleasedBox />
            ) : showContent === 2 ? (
              <CommentedBox />
            ) : (
              <ToCommentBox />
            )}
          </div>
        </div>
      </Content>
    </Layout>
  );
};
