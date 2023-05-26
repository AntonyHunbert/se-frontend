import styles from "./HeaderNav.module.css";
import { UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout } from "antd";
import { useState } from "react";

export default function HeaderNav(params) {
  const { Header } = Layout;
  const items = [
    {
        key: 1,
        label: (<div>我的钱包</div>),
    },
    {
        key: 2,
        label: (<div>2222</div>),
    }
  ];
  return (
    <Header
      className={styles.header}
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
      <Dropdown
        menu={{
          items,
        }}  
        trigger={['click']}
        className={styles.dropdownBox} 
      >
        <Button type='link' className={styles.selectBtn}>
          <UserOutlined /> 请登录
        </Button>
      </Dropdown>
      {/* <div className={styles.loginBox}>
        {" "}
        <UserOutlined /> 请登录
      </div> */}
    </Header>
  );
}
