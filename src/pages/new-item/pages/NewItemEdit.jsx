import React from "react";
import styles from "styles.module.css";
import newitem from "new-item.module.css";

export default class NewItemEdit extends React.Component {
  componentWillMount() {}
  render() {
    return (
      <div>
        <div className={newitem.addclose}>
          <div
            className={newitem.closeitem}
            onClick={() => window.history.back()}
          >
            <div className={styles.exitgrayicon} />
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <div className={newitem.usernameinputbox}>
              <input
                autoFocus
                className={newitem.usernameinput}
                placeholder="What are you looking for?"
              />
            </div>
            <div className={newitem.valueinputbox}>
              <input
                className={newitem.valueinput}
                placeholder="What is your offer?"
              />
              <div className={newitem.currency}>xDAI</div>
            </div>
            <div className={newitem.hashtagfee}>+ 0.002 xDAI hashtagfee</div>
          </div>
        </div>
        <div className={newitem.infobox}>
          <div className={newitem.iconbuttonbigblue}>
            <div className={styles.nextwhiteicon} />
          </div>
        </div>
      </div>
    );
  }
}
