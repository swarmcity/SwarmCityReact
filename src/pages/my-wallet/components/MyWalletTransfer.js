import React, { useState } from "react";
import styles from "styles.module.css";
import mywallet from "my-wallet.module.css";
import newItem from "new-item.module.css";
import UserAvatar from "react-user-avatar";

const transferRootId = "transferRootId";
const transferSendId = "transferSendId";
const transferProcessingId = "transferProcessingId";
const transferFoundId = "transferFoundId";
const transferNotfoundId = "transferNotfoundId";
const transferStatusId = "transferStatusId";
const transferReceiveId = "transferReceiveId";

const account = {
  username: "Lion",
  avatar: "",
  address: "0xJac"
};

function sendToggle() {}
function receiveToggle() {}

function MyWalletTransfer({ toConfirmStage }) {
  const [stage, setStage] = useState(transferRootId);

  switch (stage) {
    case transferRootId:
      return (
        <div>
          <div className={mywallet.transferbtns}>
            <div
              className={mywallet.button}
              onClick={stage => setStage(transferSendId)}
            >
              send
            </div>
            <div
              className={mywallet.button}
              onClick={stage => setStage(transferReceiveId)}
            >
              receive
            </div>
          </div>
        </div>
      );

    case transferSendId:
      return (
        <div>
          <div className={mywallet.valueinputbox}>
            <input className={mywallet.valueinput} placeholder="Amount" />
            <div className={mywallet.darkcurrency}>xDAI</div>
          </div>
          <div className={mywallet.shortcodebox}>
            <input
              autoFocus
              className={mywallet.shortcodeinput}
              placeholder="Receiver's shortcode"
            />
          </div>
          <div className={mywallet.dialogiconbox}>
            <div
              onClick={stage => setStage(transferRootId)}
              className={[styles.iconbuttonbig, mywallet.cancel].join(" ")}
            >
              <div className={styles.xmarkicon} />
            </div>
            <div
              onClick={stage => setStage(transferProcessingId)}
              className={[styles.iconbuttonbig, mywallet.confirm].join(" ")}
            >
              <div className={styles.nextblueicon} />
            </div>
          </div>
        </div>
      );

    case transferReceiveId:
      return (
        <div>
          <div className={mywallet.receivebox}>
            <div className={mywallet.receivetitle}>
              Your temporary shortcode
            </div>
            <div className={mywallet.shortcodebox}>
              <div className={mywallet.shortcode}>12345</div>
              <div
                onClick={stage => setStage(transferRootId)}
                className={styles.exiticonblue}
              />
            </div>
          </div>
        </div>
      );

    case transferProcessingId:
      return (
        <div>
          <div className={mywallet.receivebox}>
            <div className={mywallet.receivetitle}>Looking for receiver</div>
            <div className={mywallet.shortcodebox}>
              <div onClick={stage => setStage(transferFoundId)}>continue</div>
              <div className={newItem.statusbox}>
                <div className={newItem.bar}>
                  <div className={newItem.loading}>
                    <div
                      className={[newItem.smallpoint, newItem.point1].join(" ")}
                    />
                    <div
                      className={[newItem.smallpoint, newItem.point2].join(" ")}
                    />
                    <div
                      className={[newItem.smallpoint, newItem.point3].join(" ")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case transferFoundId:
      return (
        <div className={mywallet.receivebox}>
          <div className={mywallet.receivetitle}>Receiver found!</div>
          <div className={styles.myinfobox}>
            <div className={styles.avatar}>
              <UserAvatar
                size="40"
                name={account.username || "no-name"}
                src={account.avatar || ""}
              />
            </div>
            <div className={styles.accountbox}>
              <div className={styles.usernamesmall}>{account.username}</div>
              <div className={styles.useraddress}>{account.address}</div>
            </div>
          </div>
          <div className={mywallet.dialogiconbox}>
            <div className={[styles.iconbuttonbig, mywallet.cancel].join(" ")}>
              <div className={styles.xmarkicon} />
            </div>
            <div
              className={[styles.iconbuttonbig, mywallet.confirm].join(" ")}
              onClick={toConfirmStage}
            >
              <div className={styles.nextblueicon} />
            </div>
          </div>
        </div>
      );

    default:
      return <h1>defaultcase</h1>;
  }
}

export default MyWalletTransfer;
