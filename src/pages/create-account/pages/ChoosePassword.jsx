import React, { useState } from "react";
import styles from "styles.module.css";
import createAccountStyles from "create-account.module.css";

const ChoosePassword = ({
  onCreateAccount,
  exitStage,
  setPassword,
  password
}) => {
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const errors = [];
  if (
    password &&
    passwordConfirm &&
    passwordConfirm !== password.slice(0, passwordConfirm.length)
  )
    errors.push("Passowrds do not match");
  if (password && password.length < 8)
    errors.push("Password must be longer than 8 characters");

  return (
    <div className={createAccountStyles.formcontainer}>
      <div className={createAccountStyles.closeButton} onClick={exitStage}>
        <div className={styles.exitgrayicon} />
      </div>
      <div className={createAccountStyles.formtitle}>Choose a password.</div>
      <div className={createAccountStyles.passwordflex} />
      <div className={createAccountStyles.flexer} />

      <div className={createAccountStyles.usernameinputbox}>
        <input
          type="password"
          autoFocus
          className={createAccountStyles.usernameinput}
          placeholder="Password?"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className={createAccountStyles.flexer} />

        <input
          type="password"
          className={createAccountStyles.usernameinput}
          placeholder="Confirm password"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
        />

        {errors.map(error => (
          <div key={error} style={{ color: "red" }}>
            {error}
          </div>
        ))}
      </div>
      <div className={createAccountStyles.flexer} />

      <div
        tabIndex="2"
        className={[styles.iconbuttonbig, createAccountStyles.confirm].join(
          " "
        )}
        // Simulate a disabled but for a div
        onClick={errors.length ? null : onCreateAccount}
        disabled={errors.length}
      >
        <div className={styles.nextblueicon} />
      </div>
    </div>
  );
};

export default ChoosePassword;
