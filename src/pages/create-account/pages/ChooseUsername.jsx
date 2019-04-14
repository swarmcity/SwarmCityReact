import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import ScIcon from "components/sc-icon";

const ChooseUsername = ({
  nextStage,
  exitStage,
  avatarStage,
  username,
  setUsername,
  avatar
}) => (
  <div className={createAccount.formcontainer}>
    <div className={createAccount.closeButton} onClick={exitStage}>
      <div className={styles.exitgrayicon} />
    </div>
    <div className={createAccount.formtitle}>
      Choose an avatar and a username.
    </div>
    <div className={createAccount.placeholder}>
      <img src={avatar} className={createAccount.avatarImage} alt="avatar" />
    </div>
    <div className={createAccount.uploadbtn} />
    <div className={createAccount.uploadicon} onClick={avatarStage}>
      <div className={createAccount.arrowup} />
    </div>
    <div className={createAccount.usernameinputbox}>
      <input
        type="text"
        autoFocus
        className={createAccount.usernameinput}
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
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

export default ChooseUsername;
