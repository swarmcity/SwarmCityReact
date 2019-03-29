import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import newItem from "new-item.module.css";

const WalletSuccess = ({ toBackStage }) => (
  <div className={createAccount.containergreen}>
    <div className={createAccount.title}>Successfully sent 1 SWT to Lion.</div>

    <div className={styles.vmarkiconwhite} />
    <div
      tabIndex="2"
      className={[
        styles.iconbuttonbig,
        createAccount.confirm,
        newItem.confirm
      ].join(" ")}
      onClick={toBackStage}
    >
      <div className={styles.nextgrayicon} />
    </div>
  </div>
);

export default WalletSuccess;
