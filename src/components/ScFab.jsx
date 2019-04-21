import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import posed, { PoseGroup } from "react-pose"; // Selectors
import styles from "./ScFab.module.css";
import CreateAccountRoot from "pages/create-account/CreateAccountRoot";

const Button = posed.div({
  normal: {
    scale: 1,

    delay: 200
  },
  huge: {
    scale: 20
  }
});

const Icon = posed.div({
  normal: { opacity: 1, delay: 200 },
  huge: { opacity: 0 }
});

const ActionStage = posed.div({
  normal: { opacity: 0, delay: 0 },
  huge: { opacity: 1, delay: 200 }
});

const ActionArea = ({ reason }) => {
  switch (reason) {
    case "newuser":
      return <CreateAccountRoot />;
    case "newitem":
      return <h1>New Item</h1>;
    default:
      return <h1>Test</h1>;
  }
};

export default class ScFab extends React.Component {
  state = { isOpen: true };

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;

    return (
      <div className={styles.container} onClick={this.toggle.bind(this)}>
        <Button key="hello" pose={isOpen ? "normal" : "huge"}>
          <div className={[styles.iconbuttonbig].join(" ")} />
        </Button>

        <Icon key="icon" pose={isOpen ? "normal" : "huge"}>
          <div className={styles.plusicon} />
        </Icon>

        <ActionStage
          key="actionstage"
          pose={isOpen ? "normal" : "huge"}
          className={styles.actionarea}
        >
          <ActionArea reason={this.props.reason} />
        </ActionStage>
      </div>
    );
  }
}
