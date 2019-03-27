import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import ScIcon from "components/sc-icon.js";

const ChoosePassword = ({ nextStage, exitStage }) => (
  <div className={createAccount.formcontainer}>
    <div className={createAccount.closeButton} onClick={exitStage}>
      <div className={styles.exitgrayicon} />
    </div>
    <div className={createAccount.formtitle}>Choose a password.</div>
    <div className={createAccount.passwordflex} />
    <div className={createAccount.passwordflex} />

    <div className={createAccount.usernameinputbox}>
      <input
        type="password"
        autoFocus
        className={createAccount.usernameinput}
        placeholder="Password?"
      />
    </div>
    <div className={createAccount.flexer} />
    <div className={createAccount.flexer} />

    <div className={createAccount.usernameinputbox}>
      <input
        type="password"
        className={createAccount.usernameinput}
        placeholder="Confirm password"
      />
    </div>
    <div className={createAccount.passwordflex} />

    <div
      tabIndex="2"
      className={[styles.iconbuttonbig, createAccount.confirm].join(" ")}
      onClick={nextStage}
    >
      <div className={styles.nextblueicon} />
    </div>
  </div>
);

export default ChoosePassword;
