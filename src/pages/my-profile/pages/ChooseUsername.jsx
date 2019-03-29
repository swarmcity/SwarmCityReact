import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import ScIcon from "components/sc-icon.js";

const ChooseUsername = ({ nextStage, exitStage, avatarStage }) => (
  <div className={createAccount.formcontainer}>
    <div className={createAccount.closeButton} onClick={exitStage}>
      <div className={styles.exitgrayicon} />
    </div>
    <div className={createAccount.formtitle}>
      Choose an avatar and a username.
    </div>
    <div className={createAccount.placeholder} onClick={avatarStage} />
    <div className={createAccount.uploadbtn} />
    <div className={createAccount.uploadicon}>
      <div className={createAccount.arrowup} />
    </div>
    <div className={createAccount.usernameinputbox}>
      <input
        autofocus
        className={createAccount.usernameinput}
        placeholder="Username"
      />
    </div>
    <div className={createAccount.flexer} />
    <div
      tabIndex="2"
      className={[styles.iconbuttonbig, createAccount.confirm].join(" ")}
      onClick={nextStage}
    >
      <div className={styles.nextblueicon} />
    </div>
  </div>
);

export default ChooseUsername;
