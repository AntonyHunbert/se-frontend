import styles from "./OrderInfo.module.css";
import { CloseOutlined } from "@ant-design/icons";
import { Breadcrumb, Tag, Row, Col, Rate, Button, Carousel } from "antd";
import { NavLink } from "react-router-dom";

export const OrderInfo = (props) => {
  const releasedOrderNum = 4;
  const acceptedOrderNum = 11;
  return (
    <div className={styles.maskbox}>
      <div className={styles.orderInfoCard}>
        <div className={styles.closeBox}>
          <Breadcrumb items={[{ title: "跳蚤市场" }, { title: "电子数码" }]} />
          <button className={styles.cardCloseBtn} onClick={props.showInfo}>
            <CloseOutlined />
          </button>
        </div>
        <div className={styles.mainBox}>
          <div className={styles.infoBox2}>
            <Carousel autoplay className={styles.picsBox}>
              <img src="./键盘1.jpg" className={styles.picsStyle} />
              <img src="./鼠标1.png" className={styles.picsStyle} />
              {/* <img src="./原神1.png" className={styles.picsStyle} /> */}
            </Carousel>
            <div className={styles.orderTitle}>
              原神周边  ￥99
            </div>
            <div className={styles.descriptBox}>
              你说的对，但是《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。
              游戏发生在一个被称作「提瓦特」的幻想世界，在这里，被神选中的人将被授予「神之眼」，导引元素之力。
              你将扮演一位名为「旅行者」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，
              和他们一起击败强敌，找回失散的亲人——同时，逐步发掘「原神」的真相。
            </div>
          </div>
          <div className={styles.infoBox3}>
            <div className={styles.infoBox1}>
              <div className={styles.sellerInfo}>
                <img src="./头像1.png" className={styles.sellerAvatar} />
                <div className={styles.basicInfo}>
                  <Row>
                    <Col span={6}>卖家</Col>
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
                      发布订单{releasedOrderNum}个，接受订单{acceptedOrderNum}
                      个。
                    </Col>
                  </Row>
                </div>
                <NavLink to='/comment'>查看评价</NavLink>
              </div>
            </div>
            <div className={styles.btnBox}>
              <Button className={styles.btnStyle}>聊天</Button>
              <Button className={styles.btnStyle}>购买</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
