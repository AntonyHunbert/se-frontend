import { Card } from 'antd';
import styles from './OrderCard.module.css'
import { MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


export const OrderCard = () => {

    const { Meta } = Card;



    return <Card
        className={styles.orderCard}
        cover={<img src='./键盘1.jpg' />}
        actions={[
            <div>￥ 199</div>,
            <div><EllipsisOutlined />详情</div>,
            <NavLink to='/chat'><MessageOutlined />聊天</NavLink>
        ]}
    >
        <Meta
            title={<div>机械键盘 </div>}
            description="高斯机械键盘，上个月购入，几乎没怎么用"
        />




    </Card>

};

