import React, { useState } from "react";
import styles from "styles.module.css";
import createAccount from "create-account.module.css";
import { styled } from "@material-ui/styles";
import { BlueButton, CloseButton } from "sc-ux";

const CreateOrRestore = ({ nextStage }) => (
  <div className={createAccount.container}>
    <CloseButton />
    <div className={createAccount.title}>Let's create an account</div>
    <div className={createAccount.subtitle}>
      When you restore or create a new account it's stored locally on your
      device.
    </div>
    <div className={createAccount.flexer} />
    <div className={createAccount.flexer} />

    <BlueButton variant="contained" onClick={nextStage}>
      create account
    </BlueButton>
    <div className={createAccount.flexer} />
    <BlueButton variant="contained" onClick={nextStage}>
      restore account
    </BlueButton>
  </div>
);

export default CreateOrRestore;
