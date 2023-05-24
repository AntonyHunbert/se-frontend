import { Col, Layout, Row, Rate, Button, Radio, Card, Cascader } from "antd";
import styles from "./PersonalPage.module.css";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { OrderCard } from "../MainPage/OrderCard";
import { NewOrder } from "../NewOrder/NewOrder";
import { CommentPage } from "../Comment/CommentPage";
import axios from "axios";
import CommitedCard from "./CommitedCard";
import NotCommitCard from "./NotCommitCard";
import WaitingCard from "./WaitingCard";

const { Header, Content, Footer, Sider } = Layout;

export const PersonalPage = () => {

  useEffect(() => {
    axios({
      url: 'http://localhost:8011/user/select/client',
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        client: 12011941,
        status: 3,
        type: 3
      }
    }).then(function (response) {
      console.log(response);
    })
      .catch(function (err) {
        console.log(err);
      })
  }, [])

  const [showNewOrder, setShowNewOrder] = useState(false);

  const showNewOrderHandler = () => {
    setShowNewOrder(prevState => !prevState);
  }

  const [showCommentPage, setShowCommentPage] = useState(false);
  const showCommentPageHandler = () => {
    setShowCommentPage(prevState => !prevState);
  }

  const releasedOrderNum = 4;
  const acceptedOrderNum = 11;

  const [showContent, setShowContent] = useState('sellOver');

  const selectContentHandler = (e) => {
    console.log(e);

    var type;
    var position;
    var status;

    var path;

    if (e[0] === 'order') {
      type = 1;
    }
    else if (e[0] === 'flea') {
      type = 3;
    }
    else if (e[0] === 'info') {
      type = 2;
    }

    if (e[1] === 'sell' || e[1] === 'send' || e[1] == 'sendInfo') {
      position = 'client';
    }
    else {
      position = 'server'
    }

    if (e[2] === 'sellOver') {
      status = '2,3'
    }
    else if (e[2] === 'stillSell') {
      status = '1'
    }
    else if (e[2] === 'buyOver') {
      status = '3'
    }
    else if (e[2] === 'stillBuy') {
      status = '1,2'
    }
    else if (e[2] === 'stillSend') {
      status = '1'
    }
    else if (e[2] === 'employerDoing') {
      status = '2'
    }
    else if (e[2] === 'sendOver') {
      status = '3'
    }
    else if (e[2] === 'stillInfo') {
      status = '1'
    }
    else if (e[2] === 'anwsering') {
      status = '2'
    }
    else if (e[2] === 'infoOver') {
      status = '3'
    }
    else if (e[2] === 'myAmswering') {
      status = '2'
    }
    else if (e[2] === 'myFinishInfo') {
      status = '3'
    }
    else if (e[2] === 'myFinish') {
      status = '3'
    }
    else if (e[2] === 'myDoing') {
      status = '2'
    }


    if (position === 'server') {
      path = 'http://localhost:8011/user/select/server'
    }
    else if (position === 'client') {
      path = 'http://localhost:8011/user/select/client'
    }


    axios({
      url: path,
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        [position]: 12011941,
        status: status,
        type: type
      }
    }).then(function (response) {
      console.log(response);
    })
      .catch(function (err) {
        console.log(err);
      })


    setShowContent(e[2]);
  };

  const OrderCardBox = () => {
    return (
      <div className={styles.contentBox1}>
        <WaitingCard />
        <WaitingCard />
        <WaitingCard />
        <WaitingCard />

      </div>
    );
  };

  const CommitedCardBox = () => {
    return (
      <div className={styles.contentBox1}>
        <CommitedCard />
        <CommitedCard />
        <CommitedCard />
        <CommitedCard />

      </div>
    );
  }

  const NotCommitCardBox = () => {
    return (
      <div className={styles.contentBox1}>
        <NotCommitCard showCommentPage={showCommentPageHandler} />
        <NotCommitCard showCommentPage={showCommentPageHandler} />
        <NotCommitCard showCommentPage={showCommentPageHandler} />
        <NotCommitCard showCommentPage={showCommentPageHandler} />
        <NotCommitCard showCommentPage={showCommentPageHandler} />

      </div>
    );
  }

  const navOptions = [
    {
      value: 'flea',
      label: '跳蚤市场',
      children: [
        {
          value: 'sell',
          label: '我卖的东西',
          children: [
            {
              // 已经卖出的商品，不用展示别人的评价
              value: 'sellOver',
              label: '成功卖出',
            },
            {
              // 还在售卖的商品
              value: 'stillSell',
              label: '售卖中',
            }
          ]
        },
        {
          value: 'buy',
          label: '我买的东西',
          children: [
            {
              // 确认收货
              value: 'buyOver',
              label: '已完成'
            },
            {
              // 还未确认收货，确认收货后需要评价（强制）
              value: 'stillBuy',
              label: '未完成'
            }
          ]
        }
      ],
    },
    {
      // 任务
      value: 'order',
      label: '任务',
      children: [
        {
          // 我发布的任务
          value: 'send',
          label: '我发布的任务',
          children: [
            {
              // 还没人接
              value: 'stillSend',
              label: '等待接单',
            },
            {
              // 已接单未完成，需要确认并评价
              value: 'employerDoing',
              label: '未完成'
            },
            {
              // 已完成，不需要展示评价
              value: 'sendOver',
              label: '已完成'
            }
          ]
        },
        {
          // 我接的任务
          value: 'myTake',
          label: '我接的任务',
          children: [
            {
              // 正在进行中，展示信息
              value: 'myDoing',
              label: '进行中'
            },
            {
              // 我已经完成的任务
              value: 'myFinish',
              label: '已完成'
            }
          ]
        }

      ]
    },
    {
      // 信息
      value: 'info',
      label: '信息',
      children: [
        {
          // 我发布的信息
          value: 'sendInfo',
          label: '我发布的咨询',
          children: [
            {
              // 还没人接的信息
              value: 'stillInfo',
              label: '等待回答',
            },
            {
              // 已接单未完成，需要确认并评价
              value: 'anwsering',
              label: '未完成'
            },
            {
              // 已完成，不需要展示评价
              value: 'infoOver',
              label: '已完成'
            }
          ]
        },
        {
          // 我接的信息回答
          value: 'myInfo',
          label: '我的回答',
          children: [
            {
              // 正在进行中，展示信息
              value: 'myAmswering',
              label: '进行中'
            },
            {
              // 我已经完成的任务
              value: 'myFinishInfo',
              label: '已完成'
            }
          ]
        }

      ]
    }
  ]

  const SelectShowBox = () => {
    if ((showContent === 'stillSend') || (showContent === 'stillSell') || (showContent === 'stillInfo')) {
      return <OrderCardBox />
    } else if ((showContent === 'sellOver') || (showContent === 'buyOver') || (showContent === 'myDoing') || (showContent === 'myFinish') || (showContent === 'sendOver') || (showContent === 'infoOver') || (showContent === 'myAnswering') || (showContent === 'myFinishInfo')) {
      return <CommitedCardBox />
    } else {
      return <NotCommitCardBox />
    }
  }

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
              <Cascader defaultValue={['flea', 'sell', 'sellOver']} options={navOptions} onChange={selectContentHandler} className={styles.chooseNav} />
            </div>
            {<SelectShowBox />}
          </div>
        </div>
      </Content>
    </Layout>
    {showNewOrder && <NewOrder showCard={showNewOrderHandler} />}
    {showCommentPage && <CommentPage showCard={showCommentPageHandler} />}
  </>
};
