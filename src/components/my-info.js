import React from "react";
import styles from "../styles.module.css";
import { NavLink } from "react-router-dom";
import UserAvatar from "react-user-avatar";

const account = {
  username: "Lion",
  avatar: "",
  balance: 120.57
};
export default class MyInfo extends React.Component {
  render() {
    if (account) {
      return (
        <div className={styles.myinfobox}>
          <div className={styles.avatar}>
            <UserAvatar
              size="40"
              name={account.username || "no-name"}
              src={account.avatar || ""}
            />
          </div>
          <div className={styles.accountbox}>
            <NavLink to="/my-profile">
              <div className={styles.usernamesmall}>{account.username}</div>
            </NavLink>
            <NavLink to="/my-wallet">
              <div className={styles.balance}>{account.balance} xDAI</div>
            </NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.myinfobox}>
          <NavLink to="/create-account">
            <div className={styles.createaccountbutton}>create account</div>
          </NavLink>
        </div>
      );
    }
  }
}
