import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";

const CreateOrRestore = ({ nextStage, exitStage }) => (
  <div className={createAccount.container}>
    <div
      className={createAccount.closeButton}
      onClick={() => window.history.back()}
    >
      <div className={styles.closeicon} />
    </div>
    <div className={createAccount.title}>Let's create an account</div>
    <div className={createAccount.subtitle}>
      When you restore or create a new account it's stored locally on your
      device.
    </div>
    <div className={createAccount.flexer} />
    <div className={createAccount.flexer} />

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

export default CreateOrRestore;
