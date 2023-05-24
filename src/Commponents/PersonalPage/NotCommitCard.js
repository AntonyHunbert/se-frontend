import styles from './CardStyle.module.css'
import { Card, Button } from 'antd'

export default function NotCommitCard(params) {
  const { Meta } = Card;
  return (
    <Card
      className={styles.card}
      cover={<img src="./原神1.png" className={styles.imgSize} />}
      actions={[
        <div>￥ 19.9</div>,
        <Button type="link" size="small" onClick={params.showCommentPage}>确认收货</Button>,
      ]}
    >
      <Meta
        title={<div>原神周边</div>}
        description="室友的，帮他卖了，玩原神免费送"
      />
    </Card>
  )
};
