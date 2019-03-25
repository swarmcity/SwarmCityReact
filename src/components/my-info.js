import React from "react";
import styles from "../styles.module.css";

export default class MyInfo extends React.Component {
  render() {
    return (
      <div className={styles.myinfobox}>
        <div className={styles.createaccountbutton}>create account</div>
      </div>
    );
  }
}
