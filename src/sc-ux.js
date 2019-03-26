import styles from "styles.module.css";
import React from "react";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import createAccount from "create-account.module.css";

export const BlueButton = styled(Button)({
  fontFamily: "Montserrat, sans-serif !important",
  textTransform: "lowercase !important",
  fontWeight: "800 !important",
  fontSize: "18px !important",
  letterSpacing: "0 !important",
  lineHeight: "22px !important",
  backgroundColor: "rgba(255, 255, 255, 0.2) !important",
  border: "0 !important",
  borderRadius: "2px !important",
  boxShadow: "0px 1px 2px -1px rgba(0, 0, 0, 0.5) !important",
  color: "white !important",
  height: "48 !important",
  padding: "30px !important",
  width: "75vw",
  minWidth: "200px",
  maxWidth: "300px"
});

export const YellowButton = styled(Button)({
  fontFamily: "Montserrat, sans-serif !important",
  textTransform: "lowercase !important",
  fontWeight: "800 !important",
  fontSize: "18px !important",
  letterSpacing: "0 !important",
  lineHeight: "22px !important",
  backgroundColor: "rgba(255, 255, 255, 0.2) !important",
  border: "0 !important",
  borderRadius: "2px !important",
  boxShadow: "0px 1px 2px -1px rgba(0, 0, 0, 0.5) !important",
  color: "white !important",
  height: "48 !important",
  padding: "30px !important",
  width: "75vw",
  minWidth: "200px",
  maxWidth: "300px"
});

export const InputFormField = styled(TextField)({
  fontFamily: "Montserrat, sans-serif !important",
  width: "205px !important",
  color: "#333333 !important",
  textAlign: "center !important",
  paddingBottom: "5px !important"
});

export const CloseButton = () => (
  <div className={createAccount.closeButton}>
    <div className={styles.closeicon} />
  </div>
);
