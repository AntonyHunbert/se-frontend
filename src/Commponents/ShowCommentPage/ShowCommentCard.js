import styles from './ShowCommentCard.module.css';
import { Avatar, Card, Rate } from 'antd';

export const ShowCommentCard = () => {

  const { Meta } = Card;
  return (
    <Card
      className={styles.commentCard}
      cover={<img src="./鼠标1.png" className={styles.imgSize} />}
      actions={[
        <div className={styles.commentUser}>翻斗花园壮壮妈: </div>,
        <div>
          <Rate disabled defaultValue={2} className={styles.commentRate} />
        </div>,
      ]}
    >
      <Meta
        title={<div>罗技G502 电竞鼠标</div>}
        description="很好，孩子喜欢，敏感肌也能用"
      />
    </Card>
  );
};