import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import ScIcon from "components/sc-icon.js";
import MyEditor from "components/MyEditor";

const ChooseAvatar = ({ nextStage }) => (
  <div className={createAccount.formcontainer}>
    <div>Choose an image and crop it</div>

    <MyEditor />

    <div className={createAccount.flexer} />

    <div
      tabIndex="2"
      className={styles.iconbuttonbigcenter}
      onClick={nextStage}
    >
      <div className={styles.nextblueicon} />
    </div>
  </div>
);

export default ChooseAvatar;
