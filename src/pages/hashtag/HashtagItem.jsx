import React from "react";
import styles from "../../hashtag.module.css";
import UserAvatar from "react-user-avatar";

function HashtagItem({ item }) {
  return (
    <div className={styles.itemcontainer}>
      <div>
        <div className={styles.descriptionsmall}>{item.description}</div>
        <div className={styles.timestampsmall}>{item.timestamp}</div>
      </div>
      <div className={styles.replies}>
        0 <div className={styles.replygrey4mini} />
      </div>
      <div className={styles.avatar}>
        <UserAvatar
          size="24"
          name={item.seekername || "no-name"}
          src={item.avatar || ""}
        />
        <div className={styles.usernamesmall}>
          {item.seekername} - {item.seekerrep} SWR
        </div>
      </div>
      <div className={styles.valuebox}>
        <div className={styles.smallcurrency}>xDAI</div>
        <div className={styles.smallvalue}>{item.amount}</div>
      </div>
    </div>
  );
}

export default HashtagItem;
