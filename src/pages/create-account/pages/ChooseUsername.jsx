import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import ScIcon from "components/sc-icon.js";

const ChooseUsername = ({ nextStage }) => (
  <div className={createAccount.container}>
    <div className={createAccount.closeButton}>
      <div className={styles.closeicon} />
    </div>
    <div className={createAccount.title}>Let's create an account</div>
    <div className={createAccount.subtitle}>
      When you restore or create a new account it's stored locally on your
      device.
    </div>

    <div tabIndex="2" className={createAccount.button} onClick={nextStage}>
      <div>
        <div className={createAccount.buttontext}>create account</div>
      </div>
    </div>

    <div tabIndex="2" className={createAccount.button}>
      <div>
        <div className={createAccount.buttontext}>restore account</div>
      </div>
    </div>
  </div>
);

export default ChooseUsername;
