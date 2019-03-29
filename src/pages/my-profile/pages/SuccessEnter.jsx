import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import { NavLink } from "react-router-dom";

const SuccessEnter = ({}) => (
  <div className={createAccount.formcontainer}>
    <div className={createAccount.titleblue}>Success!</div>
    <div className={createAccount.formsubtitle}>
      You've downloaded your account file.
    </div>
    <div className={createAccount.formsubtitle}>
      Your account file combined with your password will always give you access
      to your SWT balance.
    </div>

    <NavLink to="/hashtag-list">
      <div tabIndex="2" className={createAccount.buttongray}>
        <div>
          <div className={createAccount.buttontextblue}>enter swarm.city</div>
        </div>
      </div>
    </NavLink>
  </div>
);

export default SuccessEnter;
