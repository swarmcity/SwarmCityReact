import React, { useEffect } from "react";
import UserAvatar from "react-user-avatar";
import styles from "../../styles.module.css";
import hashtag from "../../hashtag.module.css";

function ItemDetail({ item = {} }) {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div>
      <div className={styles.item}>
        <div>
          <div className={hashtag.description}>{item.description}</div>
          <div className={hashtag.timestamp}>{item.timestamp}</div>
        </div>
        <div className={hashtag.replies} />
        <div className={hashtag.avatar}>
          <UserAvatar
            size="36"
            name={item.seekername || "no-name"}
            src={item.avatar}
          />
          <div className={hashtag.username}>
            {item.seekername} - {item.seekerrep} SWR
          </div>
        </div>
        <div className={hashtag.valuebox}>
          <div className={hashtag.currency}>xDAI</div>
          <div className={hashtag.value}>{item.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
