import React from "react";
import styles from "../styles.module.css";
import { NavLink } from "react-router-dom";

export default class MyInfo extends React.Component {
  render() {
    return (
      <div className={styles.myinfobox}>
        <NavLink to="/create-account">
          <div className={styles.createaccountbutton}>create account</div>
        </NavLink>
      </div>
    );
  }
}
