import { Col, Layout, Row, Rate, Button, Radio, Card } from "antd";
import styles from "./PersonalPage.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { OrderCard } from "../MainPage/OrderCard";
import { NewOrder } from "../NewOrder/NewOrder";
import { CommentPage } from "../Comment/CommentPage";

const { Header, Content, Footer, Sider } = Layout;

export const PersonalPage = () => {

  const [showNewOrder, setShowNewOrder] = useState(false);

  const  showNewOrderHandler = () => {
    setShowNewOrder(prevState => !prevState);
  }

  const [showCommentPage, setShowCommentPage] = useState(false);
  const showCommentPageHandler = () => {
    setShowCommentPage(prevState => !prevState);
  }

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
          <Col span={8}>
            <OrderCard />
          </Col>
          <Col span={8}>
            <OrderCard />
          </Col>
          <Col span={8}>
            <OrderCard />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <OrderCard />
          </Col>
          <Col span={8}>
            <OrderCard />
          </Col>
          <Col span={8}>
            <OrderCard />
          </Col>
        </Row>
      </div>
    );
  };

  const CommentedBox = () => {
    return (
      <div className={styles.contentBox1}>
        <Row gutter={16}>
          <Col span={8}>
            <CommentedCard />
          </Col>
          <Col span={8}>
            <CommentedCard />
          </Col>
          <Col span={8}>
            <CommentedCard />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <CommentedCard />
          </Col>
          <Col span={8}>
            <CommentedCard />
          </Col>
          <Col span={8}>
            <CommentedCard />
          </Col>
        </Row>
      </div>
    );
  };

  const CommentedCard = () => {
    const { Meta } = Card;
    return (
      <Card
        className={styles.commentCard}
        cover={<img src="./鼠标1.png" />}
        actions={[
          <div>￥ 299</div>,
          <div>
            <Rate disabled defaultValue={2} />
          </div>,
        ]}
      >
        <Meta
          title={<div>罗技G502 电竞鼠标</div>}
          description="很好，孩子喜欢，敏感肌也能用"
        />
      </Card>
    );
  };

  const ToCommentBox = () => {
    return (
      <div className={styles.contentBox1}>
        <Row gutter={16}>
          <Col span={8}>
            <ToCommentCard />
          </Col>
          <Col span={8}>
            <ToCommentCard />
          </Col>
          <Col span={8}>
            <ToCommentCard />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <ToCommentCard />
          </Col>
          <Col span={8}>
            <ToCommentCard />
          </Col>
          <Col span={8}>
            <ToCommentCard />
          </Col>
        </Row>
      </div>
    );
  };

  const ToCommentCard = () => {
    const { Meta } = Card;
    return (
      <Card
        className={styles.commentCard}
        cover={<img src="./原神1.png" />}
        actions={[
          <div>￥ 19.9</div>,
          <Button type="link" size="small" onClick={showCommentPageHandler}>评价</Button>,
        ]}
      >
        <Meta
          title={<div>原神周边</div>}
          description="室友的，帮他卖了，玩原神免费送"
        />
      </Card>
    );
  };

  return <>
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
            <Button className={styles.releaseBtn} onClick={showNewOrderHandler}>
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
    {showNewOrder && <NewOrder showCard={showNewOrderHandler}/>}
    {showCommentPage && <CommentPage showCard={showCommentPageHandler}/>}
  </>
};
