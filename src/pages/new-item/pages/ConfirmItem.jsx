import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import ScIcon from "components/sc-icon.js";

const ConfirmItem = ({ nextStage, exitStage }) => (
  <div className={createAccount.container}>
    <div className={createAccount.title}>Post this request for 9.005 SWT?</div>
    <div className={createAccount.subtitle}>
      This can not be undone. 0.005 SWT hashtagfee is included.
    </div>
    <div className={createAccount.flexer} />
    <div className={createAccount.flexer} />
    <div className={createAccount.dialogiconbox}>
      <div
        className={[styles.iconbuttonbig, createAccount.cancel].join(" ")}
        onClick={exitStage}
      >
        <div className={styles.xmarkicon} />
      </div>
      <div
        className={[styles.iconbuttonbig, createAccount.confirm].join(" ")}
        onClick={nextStage}
      >
        <div className={styles.vmarkicon} />
      </div>
    </div>
  </div>
);

export default ConfirmItem;
