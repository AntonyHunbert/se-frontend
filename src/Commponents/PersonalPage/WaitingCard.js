import styles from './CardStyle.module.css'
import { Button, Card } from 'antd'

export default function WaitingCard() {
    const { Meta } = Card;
    return (
        <Card

            className={styles.card}
            cover={<img src='./键盘1.jpg' className={styles.imgSize} />}
            actions={[
                <div>￥ 1</div>,

                <Button type='link' size='small'>删除订单</Button>
            ]}
        >
            <Meta
                title={<div>1 </div>}
                description={1}
            />
        </Card>
    )

};
