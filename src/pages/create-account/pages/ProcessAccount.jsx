import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";

const ProcessAccount = ({ nextStage, exitStage, unlockStage }) => (
  <div className={createAccount.formcontainer}>
    <div className={createAccount.closeButton} onClick={exitStage}>
      <div className={styles.exitgrayicon} />
    </div>
    <div className={createAccount.titleblue}>Creating account</div>
    <div className={createAccount.formsubtitle}>Hold on to your pants</div>
  </div>
);

export default ProcessAccount;
