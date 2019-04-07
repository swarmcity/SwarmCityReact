import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";

const MyIdentity = ({
  nextStage,
  exitStage,
  avatarStage,
  avatar,
  username,
  setUsername
}) => (
  <div className={createAccount.formcontainer}>
    <div className={createAccount.closeButton} onClick={exitStage}>
      <div className={styles.exitgrayicon} />
    </div>
    <div className={createAccount.placeholder}>
      <img className={createAccount.avatarImage} src={avatar} alt="avatar" />
    </div>
    <div className={createAccount.uploadbtn} />
    <div className={createAccount.uploadicon} onClick={avatarStage}>
      <div className={createAccount.arrowup} />
    </div>
    <div className={createAccount.usernameinputbox}>
      <input
        className={createAccount.usernameinput}
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
    </div>
    <div className={createAccount.showkeystoggle}>show my keys</div>
    <div className={createAccount.flexer} />
  </div>
);

export default MyIdentity;
