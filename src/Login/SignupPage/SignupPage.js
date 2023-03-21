import { Form, Input, Button, Row, Col, Space } from "antd";
import { useState } from "react";
import styles from './SignupPage.module.css'

const SignupPage = () => {
    return <>
        {/* <div>这是注册页面</div> */}
        <SignupForm />
    </>

}


const SignupForm = () => {
    const [enableSendCode, setenableSendCode] = useState(true);
    const [time, setTime] = useState(59);
    const CountTime = () => {
        let t = 59;
        setenableSendCode(false);
        var timeClock;
        timeClock = setInterval(() => {
            t--;
            setTime(t);
            if (t === 0) {
                setenableSendCode(true);
                clearInterval(timeClock)
            }
        }, 1000)
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    let sendBtn
    if (enableSendCode) {
        sendBtn = <Button onClick={() => { CountTime() }} className={styles.sendBtn}>发送验证码</Button>
    }
    else {
        sendBtn = <Button disabled className={styles.sendBtn}>{time}秒后可重新发送</Button>
    }

    return <div className={styles.signupBox}>

        
            <div className={styles.loginIntro}>

                <Row>
                    <Col span={20} offset={4}><div className={styles.introTitle}>欢迎使用接单平台！</div></Col>
                </Row>
                <Row align={"middle"}>
                    <Col span={3} offset={4}><img src='./闲置.svg' /></Col>
                    <Col span={16}><div className={styles.intro1}>闲置物品交易</div></Col>
                </Row>
                <Row align={"middle"}>
                    <Col span={3} offset={4}><img src='./作业.svg' /></Col>
                    <Col span={16}><div className={styles.intro1}>作业求助</div></Col>
                </Row>
                <Row align={"middle"}>
                    <Col span={3} offset={4}><img src='./外卖-2.svg' /></Col>
                    <Col span={16}><div className={styles.intro1}>外卖、跑腿</div></Col>
                </Row>
            </div>

            <div className={styles.signupForm}>
                <Form
                    onFinish={onFinish}
                    size="middle"
                    labelCol={{
                        span: 5,
                        // offset: 2,
                    }}
                    wrapperCol={{
                        span: 18
                    }}

                >
                    {/* <Space direction="vertical"> */}
                    <Form.Item
                        label={<p>学号</p>}
                        name="SID"
                        rules={[
                            {
                                required: true,
                                message: '学号不能为空！',
                            },
                            {
                                pattern: /^\d{8}$/,
                                message: 'SID格式错误！',
                            }
                        ]}
                    >
                        <Input placeholder="请输入8位SID" style={{ width: "100%" }} />

                    </Form.Item>

                    <Form.Item
                        label={<p>密码</p>}
                        name="pwd"
                        rules={[
                            {
                                required: true,
                                message: '密码不能为空！',

                            }
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label={<p>确认密码</p>}
                        name="confirmPwd"
                        rules={[
                            {
                                required: true,
                                message: '请再次输入密码！',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('pwd') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('两次输入的密码不同，请重新输入！'));
                                },
                            }),
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label={<p>用户名</p>}
                        name="nickname"
                        rules={[
                            {
                                required: true,
                                message: '用户名不能为空！',
                            }
                        ]}
                    >
                        <Input placeholder="给自己起一个名字" />
                    </Form.Item>

                    <Form.Item
                        label={<p>验证码</p>}
                        name="identifyCode"
                        rules={[
                            {
                                required: true,
                                message: "验证码不能为空！",
                            },
                            {
                                pattern: /^\d{6}$/,
                                message: "验证码为6位数字，请正确输入！"
                            }
                        ]}
                    >
                        <Row>
                            <Col span={12}><Input /></Col>
                            <Col span={8} offset={4}>{sendBtn}</Col>
                        </Row>


                    </Form.Item>



                    <Form.Item className={styles.signupBtn}>
                        <Button htmlType='submit' style={{ width: "10vw" }}>注册</Button>
                    </Form.Item>

                    {/* </Space> */}



                </Form>


            </div>

        






    </div>

}

export default SignupPage;