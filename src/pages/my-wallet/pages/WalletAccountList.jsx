import React, { useState } from "react";
import styles from "styles.module.css";
import mywallet from "my-wallet.module.css";
import ScIcon from "components/sc-icon.js";

const WalletAccountList = ({ mainnetStage, bridgedStage }) => (
  <div className={mywallet.container}>
    <div className={mywallet.closeButton} onClick={() => window.history.back()}>
      <div className={styles.exitgrayicon} />
    </div>
    <div className={mywallet.accountlist}>
      <div className={mywallet.accountitem} onClick={bridgedStage}>
        cash account
      </div>
      <div className={mywallet.accountitem} onClick={mainnetStage}>
        reserves account
      </div>
    </div>
  </div>
);

export default WalletAccountList;
