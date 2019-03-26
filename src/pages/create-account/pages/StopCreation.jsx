import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import ScIcon from "components/sc-icon.js";

const StopCreation = ({ nextStage }) => (
  <div className={createAccount.formcontainer}>You sure?</div>
);

export default StopCreation;
