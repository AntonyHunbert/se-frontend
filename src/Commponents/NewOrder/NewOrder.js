import styles from "./NewOrder.module.css";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Cascader,
  InputNumber,
  Button,
  Upload,
  message,
} from "antd";
import { useState } from "react";

export const NewOrder = (props) => {
  return (
    <div className={styles.maskbox}>
      <div className={styles.orderCard}>
        <div className={styles.closeBox}>
          <button className={styles.cardCloseBtn} onClick={props.showCard}>
            <CloseOutlined />
          </button>
        </div>
        <OrderForm />
      </div>
    </div>
  );
};

const OrderForm = () => {

  const [tag, setTag] = useState([]);
  const [price, setPrice] = useState(100);
  const [detail, setDetail] = useState('');


  const tagOptions = [
    {
      label: "跳蚤市场",
      value: "flea",
      children: [
        {
          label: "书本文具",
          value: "book",
        },
        {
          label: "电子数码",
          value: "3c",
        },
        {
          label: "零食饮料",
          value: "food",
        },
        {
          label: "生活用品",
          value: "life",
        },
        {
          label: "住宿/转租",
          value: "rent",
        },
        {
          label: "课程/家教",
          value: "lesson",
        },
        {
          label: "交通工具",
          value: "traffic",
        },
        {
          label: "其他",
          value: "other",
        },
      ],
    },
    {
      label: "任务发布",
      value: "order",
      children: [
        {
          label: "取外卖",
          value: "takeout",
        },
        {
          label: "拿快递",
          value: "express",
        },
        {
          label: "跑腿",
          value: "errand",
        },
        {
          label: "志愿者招募",
          value: "voluntary",
        },
        {
          label: "乐跑/体测",
          value: "sport",
        },
      ],
    },
    {
      label: "信息交流",
      value: "info",
      children: [
        {
          label: "作业求助",
          value: "homework",
        },
        {
          label: "信息咨询",
          value: "communicate",
        },
      ],
    },
  ];

  const tagOnChange = (e) => {
    //返回的是一个数组，索引值为级联层数  
    console.log(e);
    var type;
    if (e[0] === 'order') {
      type = 1;
    }
    else if (e[0] === 'flea') {
      type = 3;
    }
    else if (e[0] === 'info') {
      type = 2;
    }
    setTag([tag[0], type]);

  };

  const { TextArea } = Input;

  const [picture, setPicture] = useState("");
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
    showUploadList: true,
  };

  const changePrice = (e) => {
    setPrice(e);
  }

  const changeDetail = (e) => {
    // console.log(e.target.value);
    setDetail(e.target.value)
  }
  return (
    <div className={styles.orderForm}>
      <Form
        labelCol={{
          span: 3,
          offset: 2,
        }}
        wrapperCol={{
          span: 15,
          offset: 1,
        }}
      >
        <Form.Item
          label={<p>名称</p>}
          name="orderName"
          rules={[
            {
              required: true,
              message: "名称不能为空！",
            },
          ]}
        >
          <Input placeholder="请输入订单的名称" style={{ width: "80%" }} />
        </Form.Item>

        <Form.Item
          label={<p>选择标签</p>}
          name="tags"
          rules={[
            {
              required: true,
              message: "请选择标签！",
            },
          ]}
        >
          <Cascader
            style={{
              width: "100%",
            }}
            options={tagOptions}
            defaultValue={[["flea", "3c"]]}
            onChange={tagOnChange}
          // 当前可以选择最多3个标签，如果要改成只能选1个，将下面两行注释掉即可
          // multiple
          // maxTagCount="3"
          />
        </Form.Item>

        <Form.Item
          label={<p>标价</p>}
          name="price"
          rules={[
            {
              required: true,
              message: "标价不能为空！",
            },
          ]}
        >
          <InputNumber addonAfter="￥" defaultValue={100} style={{ width: "80%" }} onChange={changePrice} />
        </Form.Item>

        <Form.Item label={<p>描述</p>} name="description">
          <TextArea
            showCount
            maxLength={100}
            style={{
              height: 120,
              marginBottom: 24,
              width: "100%",
            }}
            placeholder="简单的描述详情"
            onChange={changeDetail}
          />
        </Form.Item>

        <Form.Item label={<p>上传图片</p>} name="uploadPics">
          <div style={{ width: "40%" }}>
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>点击上传</Button>
            </Upload>
          </div>
        </Form.Item>

        <Form.Item className={styles.releaseBtn}>
          <Button htmlType='submit' style={{ width: "10vw" }}>发布</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
