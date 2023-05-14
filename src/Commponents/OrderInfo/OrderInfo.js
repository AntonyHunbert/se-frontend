import styles from "./OrderInfo.module.css";
import { CloseOutlined } from "@ant-design/icons";

export const OrderInfo = (props) => {
  
    const Tag = (props) => {
        return <div className={styles.tagBox1}>
            {props.value}
        </div>
    }
  
    return (
    <div className={styles.maskbox}>
      <div className={styles.orderInfoCard}>
        <div className={styles.closeBox}>
          <button className={styles.cardCloseBtn}>
            <CloseOutlined />
          </button>
        </div>
        <div className={styles.mainBox}>
          <div className={styles.infoBox1}>
            <div className={styles.tagBox}>
                <Tag value={"电子数码"}/>
                <Tag value={"零食饮料"}/>
                <Tag value={"电子数码"}/>
            </div>
            <div className={styles.sellerInfo}>
                

            </div>
          </div>
          <div className={styles.infoBox2}></div>
        </div>
      </div>
    </div>
  );
};
