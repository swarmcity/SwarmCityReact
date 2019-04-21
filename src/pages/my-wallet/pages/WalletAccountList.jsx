import React, { useState } from "react";
import styles from "styles.module.css";
import hashtaglist from "hashtag-list.module.css";
import mywallet from "my-wallet.module.css";

const WalletAccountList = ({ mainnetStage, bridgedStage }) => (
  <div className={hashtaglist.container}>
    <div className={mywallet.closeButton} onClick={() => window.history.back()}>
      <div className={styles.exitgrayicon} />
    </div>
    <div className={hashtaglist.hashtaglistitem} onClick={bridgedStage}>
      <div className={hashtaglist.itemcontent}>
        <div className={hashtaglist.hashtaglistname}>
          <span className={styles.yellow}>123.00 SWTKVN</span>
        </div>
      </div>
      <div className={hashtaglist.completed}>Bridged SWT on Kovan</div>
    </div>
    <div className={hashtaglist.hashtaglistitem} onClick={mainnetStage}>
      <div className={hashtaglist.itemcontent}>
        <div className={hashtaglist.hashtaglistname}>
          <span className={styles.blue}>23.00 SWT</span>
        </div>
      </div>
      <div className={hashtaglist.completed}>Swarm City Token on Mainnet</div>
    </div>
    <div className={hashtaglist.hashtaglistitem} onClick={bridgedStage}>
      <div className={hashtaglist.itemcontent}>
        <div className={hashtaglist.hashtaglistname}>44.56 xDAI</div>
      </div>
      <div className={hashtaglist.completed}>xDAI</div>
    </div>
    <div className={hashtaglist.hashtaglistitem} onClick={mainnetStage}>
      <div className={hashtaglist.itemcontent}>
        <div className={hashtaglist.hashtaglistname}>320.00 DAI</div>
      </div>
      <div className={hashtaglist.completed}>DAI Token on Mainnet</div>
    </div>
  </div>
);

export default WalletAccountList;
