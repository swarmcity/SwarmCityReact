import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";

const WalletConfirm = ({ toBackStage, toSuccessStage }) => (
  <div className={createAccount.container}>
    <div className={createAccount.title}>
      You are about to send X xDAI to Lion
    </div>
    <div className={createAccount.subtitle}>This can not be undone.</div>
    <div className={createAccount.flexer} />
    <div className={createAccount.flexer} />
    <div className={createAccount.dialogiconbox}>
      <div
        className={[styles.iconbuttonbig, createAccount.cancel].join(" ")}
        onClick={toBackStage}
      >
        <div className={styles.xmarkicon} />
      </div>
      <div
        className={[styles.iconbuttonbig, createAccount.confirm].join(" ")}
        onClick={toSuccessStage}
      >
        <div className={styles.vmarkicon} />
      </div>
    </div>
  </div>
);

export default WalletConfirm;
