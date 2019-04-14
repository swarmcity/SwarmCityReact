import React from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";

const BackupWarning = ({ nextStage, exitStage, unlockStage }) => (
  <div className={createAccount.formcontainer}>
    <div className={createAccount.closeButton} onClick={exitStage}>
      <div className={styles.exitgrayicon} />
    </div>
    <div className={createAccount.titleblue}>Great!</div>
    <div className={createAccount.formsubtitle}>
      You now have a Swarm City account. Let's create a backup and you're all
      set!
    </div>
    <div className={createAccount.placeholder} />
    <div className={createAccount.username}>myUsername</div>
    <div className={createAccount.flexer} />
    <div className={createAccount.showkeystoggle}>show my keys</div>
    <div tabIndex="2" className={createAccount.buttongray} onClick={nextStage}>
      <div>
        <div className={createAccount.buttontextblue}>backup my account</div>
      </div>
    </div>
  </div>
);

export default BackupWarning;
