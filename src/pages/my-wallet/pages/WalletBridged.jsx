import React from "react";
import styles from "styles.module.css";
import mywallet from "my-wallet.module.css";
import MyWalletLog from "../components/MyWalletLog";
import MyWalletTransfer from "../components/MyWalletTransfer";

const WalletBridged = ({ toBackStage, toConfirmStage }) => (
  <div>
    <div className={mywallet.topcontainer}>
      <div className={mywallet.closeButton} onClick={toBackStage}>
        <div className={styles.backicon} />
      </div>
      <div className={mywallet.bigbalance}>
        120.57 <span className={mywallet.currency}>xDAI</span>
      </div>
      <div className={mywallet.transfer}>
        <MyWalletTransfer toConfirmStage={toConfirmStage} />
      </div>
    </div>

    <div className={mywallet.logcontainer}>
      <MyWalletLog />
    </div>
  </div>
);

export default WalletBridged;
