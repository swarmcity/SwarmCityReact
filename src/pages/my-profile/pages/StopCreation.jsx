import React from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";

const StopCreation = ({ nextStage }) => (
  <div className={createAccount.container}>
    <div className={createAccount.title}>
      Do you want to stop creating your account?
    </div>
    <div className={createAccount.subtitle}>
      This can not be undone. All progress will be lost
    </div>
    <div className={createAccount.flexer} />
    <div className={createAccount.flexer} />
    <div className={createAccount.dialogiconbox}>
      <div
        className={[styles.iconbuttonbig, createAccount.cancel].join(" ")}
        onClick={nextStage}
      >
        <div className={styles.xmarkicon} />
      </div>
      <div
        className={[styles.iconbuttonbig, createAccount.confirm].join(" ")}
        onClick={() => window.history.back()}
      >
        <div className={styles.vmarkicon} />
      </div>
    </div>
  </div>
);

export default StopCreation;
