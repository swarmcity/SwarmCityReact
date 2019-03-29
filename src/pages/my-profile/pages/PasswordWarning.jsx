import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import ScIcon from "components/sc-icon.js";

const PasswordWarning = ({ nextStage, exitStage }) => (
  <div className={createAccount.formcontainer}>
    <div className={createAccount.closeButton} onClick={exitStage}>
      <div className={styles.exitgrayicon} />
    </div>
    <div className={createAccount.formtitle}>Choose a password.</div>
    <div className={styles.alertblueicon} />
    <div className={createAccount.box}>
      There is no password recovery available in Swarm City.
      <br />
      <br />
      Choose your password with care.
    </div>

    <div
      tabIndex="2"
      className={[styles.iconbuttonbig, createAccount.confirm].join(" ")}
      onClick={nextStage}
    >
      <div className={styles.nextblueicon} />
    </div>
  </div>
);

export default PasswordWarning;
