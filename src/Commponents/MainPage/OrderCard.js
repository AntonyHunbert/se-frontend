import { Card } from 'antd';
import styles from './OrderCard.module.css'
import { MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { OrderInfo } from '../OrderInfo/OrderInfo';


export const OrderCard = () => {

    const { Meta } = Card;
    const [showOrderInfo, setShowOrderInfo] = useState(false);

    const showOrderInfoHandler = () => {
        setShowOrderInfo(prevState => !prevState);
    }



    return <>
    <Card
        
        className={styles.orderCard}
        cover={<img src='./键盘1.jpg' />}
        actions={[
            <div>￥ 199</div>,
            <div onClick={showOrderInfoHandler}><EllipsisOutlined />详情</div>,
            <NavLink to='/chat'><MessageOutlined />聊天</NavLink>
        ]}
    >
        <Meta
            title={<div>机械键盘 </div>}
            description="高斯机械键盘，上个月购入，几乎没怎么用"
        />
    </Card>
    {showOrderInfo && <OrderInfo showInfo={showOrderInfoHandler}/>}
    </>

};

