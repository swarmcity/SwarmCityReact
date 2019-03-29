import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import newItem from "new-item.module.css";
import ScIcon from "components/sc-icon.js";
import { NavLink } from "react-router-dom";

const SuccessItem = ({ nextStage, exitStage }) => (
  <div className={createAccount.containergreen}>
    <div className={createAccount.title}>Your request is posted.</div>

    <div className={styles.vmarkiconwhite} />
    <div
      tabIndex="2"
      className={[
        styles.iconbuttonbig,
        createAccount.confirm,
        newItem.confirm
      ].join(" ")}
      onClick={() => window.history.back()}
    >
      <div className={styles.nextgrayicon} />
    </div>
  </div>
);

export default SuccessItem;
