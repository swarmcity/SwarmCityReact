import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import newItem from "new-item.module.css";
import ScIcon from "components/sc-icon.js";

const ProcessItem = ({ nextStage, exitStage }) => (
  <div className={createAccount.containergreen}>
    <div className={createAccount.title}>Processing request</div>
    <div className={newItem.statusbox}>
      <div className={newItem.bar}>
        <div className={newItem.loading}>
          <div className={[newItem.smallpoint, newItem.point1].join(" ")} />
          <div className={[newItem.smallpoint, newItem.point2].join(" ")} />
          <div className={[newItem.smallpoint, newItem.point3].join(" ")} />
        </div>
      </div>
    </div>

    <div
      tabIndex="2"
      className={[
        styles.iconbuttonbig,
        createAccount.confirm,
        newItem.confirm
      ].join(" ")}
      onClick={nextStage}
    >
      <div className={styles.nextgrayicon} />
    </div>
  </div>
);

export default ProcessItem;
