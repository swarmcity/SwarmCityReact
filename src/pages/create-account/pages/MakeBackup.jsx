import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";

const MakeBackup = ({ keystore, nextStage, exitStage }) => {
  /**
   * ### TODO:
   * - logic to generate the print version of the backup
   * - logic to convert the keystore to a file and download it
   *
   * ### NOTE:
   * The keystore object is fetched from the redux state at `user.keystore`.
   * It is created by the `createAccount` saga in `service/user`.
   * It should be available before the user reaches this stage.
   */
  console.log({ keystore });

  return (
    <div className={createAccount.formcontainer}>
      <div className={createAccount.closeButton} onClick={exitStage}>
        <div className={styles.exitgrayicon} />
      </div>
      <div className={createAccount.formtitle}>Make a backup.</div>
      <div className={styles.alertblueicon} />
      <div className={createAccount.box}>
        There are no central servers on which accounts are stored.
        <br />
        <br />
        This means you are responsible for your own account at all times.
      </div>

      <div
        tabIndex="2"
        className={createAccount.buttongray}
        onClick={nextStage}
      >
        <div>
          <div className={createAccount.buttontextblue}>print paper wallet</div>
        </div>
      </div>
      <div
        tabIndex="2"
        className={createAccount.buttongray}
        onClick={nextStage}
      >
        <div>
          <div className={createAccount.buttontextblue}>download my file</div>
        </div>
      </div>
      <div className={createAccount.flexer} />

      <div className={createAccount.showkeystoggle}>show my keys</div>
    </div>
  );
};

export default MakeBackup;
