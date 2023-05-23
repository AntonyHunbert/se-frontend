import styles from './CardStyle.module.css'
import {Card} from 'antd'

export default function CommitedCard() {
    const { Meta } = Card;
    return (
        <Card
        
        className={styles.card}
        cover={<img src='./键盘1.jpg' />}
        actions={[
            <div>￥ 199</div>,
            <div>机械键盘</div>
        ]}
    >
        <Meta
            description="高斯机械键盘，上个月购入，几乎没怎么用"
        />
    </Card>
    )
    
};
