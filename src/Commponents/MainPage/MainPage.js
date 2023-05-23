import {
  Layout,
  Menu,
  Input,
  Select,
  Radio,
  Button,
  Row,
  Col,
  Card,
} from "antd";
// import { Content, Header } from "antd/es/layout/layout";
// import Sider from "antd/es/layout/Sider";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./MainPage.module.css";
import {
  LockOutlined,
  UserOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";
import { OrderCard } from "./OrderCard";

const { Header, Content, Footer, Sider } = Layout;
const MainPage = () => {

  const [type, setType] = useState(1);
  const [goods, setGoods] = useState([]);


  // const [demoArr, setDemoArr] = useState([]);

  //根据type搜，就是跳蚤市场，外卖和作业 1是跑腿，2是作业，3是跳蚤市场
  //返回自己发的订单，根据订单状态搜索
  //返回自己接了什么单

  useEffect(() => {
    axios({
      url: 'http://localhost:8011/user/select/noserver',
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        type: type
      }
    }).then(function (response) {
      console.log(response);
    })
      .catch(function (err) {
        console.log(err);
      })
  }, [type])

  const mainNavItems = [
    {
      key: "flea",
      label: "闲置物品交易",
      icon: <img src="./闲置.svg" />,
    },
    {
      key: "homework",
      label: "作业求助",
      icon: <img src="./作业.svg" />,
    },
    {
      key: "errand",
      label: "外卖 / 跑腿",
      icon: <img src="./外卖-2.svg" />,
    },
  ];

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  // 选择商品状态，出还是收
  const [orderStatus, setOrderStatus] = useState("sell");

  const siderNavItems = [
    getItem("跳蚤市场", "flea", <img src="./闲置.svg" />, [
      getItem("书本文具", "book"),
      getItem("电子数码", "3c"),
      getItem("零食饮料", "food"),
      getItem("生活用品", "life"),
      getItem("住宿/转租", "rent"),
      getItem("课程/家教", "lesson"),
      getItem("交通工具", "traffic"),
      getItem("其他", "other"),
    ]),

    getItem("任务发布", "order", <img src="./外卖-2.svg" />, [
      getItem("取外卖", "takeout"),
      getItem("拿快递", "express"),
      getItem("跑腿", "errand"),
      getItem("志愿者招募", "voluntary"),
      getItem("乐跑/体测", "sport"),
    ]),

    getItem("信息交流", "info", <img src="./作业.svg" />, [
      getItem("作业求助", "homework"),
      getItem("信息咨询", "communicate"),
    ]),
  ];

  const rootSiderKeys = ["flea", "order", "info"];

  const [openKeys, setOpenKeys] = useState(["flea"]);

  const onOpenChange = (keys) => {

    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSiderKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }

    if (keys[0] === 'order') {
      setType(1)
    }
    else if (keys[0] === 'flea') {
      setType(3)
    }
    else if (keys[0] === 'info') {
      setType(2)
    }
  };

  const clickItem = (e) => {
    console.log(e.key);
  }

  const { Search } = Input;

  const onSearch = (value) => console.log(value);

  const handleSort = (value) => console.log(`selected ${value}`);

  const orderStatusChange = (value) => {
    console.log("checked", value.target.value);
    setOrderStatus(value.target.value);
  };

  return (
    <>

      {/* <button onClick={demoChange}></button> */}

      <Layout>
        <Header
          className={styles.mainHeader}
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
          }}
          theme="light"
        >
          <div>logo</div>
          {/* <Menu mode="horizontal"
                    items={mainNavItems}
                /> */}

          {/* <div className={styles.loginBox}> 修改密码</div> */}
          <div className={styles.loginBox}>
            {" "}
            <UserOutlined /> 请登录
          </div>
        </Header>

        <Layout hasSider>
          <Sider
            className={styles.mainSider}
            theme="light"
            width={"13vw"}
            style={{
              // overflow: 'auto',
              height: "60vh",
              position: "sticky",
              // left: 0,
              top: "8vh",
              zIndex: 1,
            }}
          >
            <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              items={siderNavItems}
              onClick={clickItem}
            />
          </Sider>
          <Content>

            <div className={styles.sortingBox}>
              <Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                size={"large"}
                className={styles.search}
              />
              {/* <Select
                defaultValue={"timeNewToOld"}
                width={"7vw"}
                onChange={handleSort}
                size="large"
                options={[
                  {
                    value: "timeNewToOld",
                    label: (
                      <div className={styles.select1}>
                        <FieldTimeOutlined /> 按更新时间
                      </div>
                    ),
                  },
                  {
                    value: "priceHighToLow",
                    label: <div className={styles.select1}>价格从高到低</div>,
                  },
                  {
                    value: "priceLowToHigh",
                    label: <div className={styles.select1}>价格从低到高</div>,
                  },
                ]}
              />
              <Radio.Group
                options={[
                  {
                    value: "sell",
                    label: "出",
                  },
                  {
                    value: "buy",
                    label: "收",
                  },
                ]}
                onChange={orderStatusChange}
                value={orderStatus}
                optionType="button"
                buttonStyle="solid"
              /> */}
            </div>
            <div className={styles.mainContent}>
              {/* 放卡片在这里（整个系统的主题色和背景都还没定，这个是我随便找的） */}
              <OrderCard/>
              <OrderCard/>
              <OrderCard/>
              <OrderCard/>
              <OrderCard/>
            </div>

          </Content>
        </Layout>
      </Layout >
    </>
  );
};

export default MainPage;
