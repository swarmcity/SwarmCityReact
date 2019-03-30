import React, { useState } from "react";
import styles from "styles.module.css";
import createAccountStyles from "create-account.module.css";
import ScIcon from "components/sc-icon.js";

const ChoosePassword = ({
  createAccount,
  exitStage,
  setPassword,
  password
}) => (
  <div className={createAccountStyles.formcontainer}>
    <div className={createAccountStyles.closeButton} onClick={exitStage}>
      <div className={styles.exitgrayicon} />
    </div>
    <div className={createAccountStyles.formtitle}>Choose a password.</div>
    <div className={createAccountStyles.passwordflex} />
    <div className={createAccountStyles.passwordflex} />

    <div className={createAccountStyles.usernameinputbox}>
      <input
        type="password"
        autoFocus
        className={createAccountStyles.usernameinput}
        placeholder="Password?"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </div>
    <div className={createAccountStyles.flexer} />
    <div className={createAccountStyles.flexer} />

    <div className={createAccountStyles.usernameinputbox}>
      <input
        type="password"
        className={createAccountStyles.usernameinput}
        placeholder="Confirm password"
      />
    </div>
    <div className={createAccountStyles.passwordflex} />

    <div
      tabIndex="2"
      className={[styles.iconbuttonbig, createAccountStyles.confirm].join(" ")}
      onClick={createAccount}
    >
      <div className={styles.nextblueicon} />
    </div>
  </div>
);

export default ChoosePassword;
