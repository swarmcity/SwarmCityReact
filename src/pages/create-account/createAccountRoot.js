import React from "react";
import styles from "../../styles.module.css";
import createAccount from "../../create-account.module.css";
import ScIcon from "../../components/sc-icon.js";
import { NavLink } from "react-router-dom";

import { Route, Link } from "react-router-dom";

export default class CreateAccount extends React.Component {
  render() {
    return (
      <div className={createAccount.container}>
        <div className={createAccount.closeButton}>
          <div className={styles.closeicon} />
        </div>
        <div className={createAccount.title}>Let's create an account</div>
        <div className={createAccount.subtitle}>
          When you restore or create a new account it's stored locally on your
          device.
        </div>
        <NavLink to="/hashtag-list">
          <div tabIndex="2" className={createAccount.button}>
            <div>
              <div className={createAccount.buttontext}>create account</div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/hashtag-list">
          <div tabIndex="2" className={createAccount.button}>
            <div>
              <div className={createAccount.buttontext}>restore account</div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}
