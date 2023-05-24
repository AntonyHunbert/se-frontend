import { Card, Button } from 'antd';
import styles from './OrderCard.module.css'
import { MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { OrderInfo } from '../OrderInfo/OrderInfo';
import { useNavigate } from 'react-router-dom';


export const OrderCard = (props) => {

    const { Meta } = Card;
    const [showOrderInfo, setShowOrderInfo] = useState(false);
    const [order_id, setOrder_id] = useState(props.order_id);
    const [client_id, setClient_id] = useState(props.client_id);

    const navigate = useNavigate();

    const showOrderInfoHandler = () => {
        setShowOrderInfo(prevState => !prevState);
    }

    const jumpToChat = () => {
        navigate('/chat', { state: { client: client_id.toString(), server: localStorage.getItem('stuId') } });
    }

    return <>
        <Card

            className={styles.orderCard}
            cover={<img src={props.picture} className={styles.imgSize} />}
            actions={[
                <div>{client_id}</div>,
                <div>￥ {props.price}</div>,
                <div onClick={showOrderInfoHandler}><EllipsisOutlined />详情</div>,
                <Button onClick={jumpToChat} type='link' size='small'><MessageOutlined />聊天</Button>
            ]}
        >
            <Meta
                title={<div>{props.title} </div>}
                description={props.description}
            />
        </Card>
        {showOrderInfo && <OrderInfo showInfo={showOrderInfoHandler} />}
    </>

};

