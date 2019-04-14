import React, { useEffect } from "react";
import UserAvatar from "react-user-avatar";
import hashtag from "../../hashtag.module.css";

function ItemReply({ item = {} }) {
  useEffect(() => {
    window.scroll(0, 0);
  });

  return (
    <div className={hashtag.reply}>
      <div className={hashtag.toprow}>
        <div>{item.description}</div>
        <div className={hashtag.valuebox}>
          <div className={hashtag.value}>for {item.amount}</div>
          <div className={hashtag.currency}>xDAI</div>
        </div>
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
    </div>
  );
}

export default ItemReply;
