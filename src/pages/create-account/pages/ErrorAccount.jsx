import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";

const ErrorAccount = ({ error }) => (
  <div className={createAccount.formcontainer}>
    <div className={createAccount.closeButton}>
      <div className={styles.exitgrayicon} />
    </div>
    <div className={createAccount.titleblue}>Error in account creation</div>
    <div className={createAccount.formsubtitle}>{error}</div>
  </div>
);

export default ErrorAccount;
