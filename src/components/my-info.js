import React from "react";
import styles from "../styles.module.css";
import UserAvatar from "react-user-avatar";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { NavLink } from "react-router-dom";

import {
  getUsername,
  getUserBalances,
  getUserAvatar
} from "services/user/selectors";

class MyInfo extends React.Component {
  render() {
    if (this.props.username) {
      return (
        <div className={styles.myinfobox}>
          <NavLink to="/my-profile">
            <div className={styles.avatar}>
              <UserAvatar
                size="40"
                name={this.props.username || "no-name"}
                src={this.props.avatar || ""}
              />
            </div>
          </NavLink>
          <div className={styles.accountbox}>
            <NavLink to="/my-profile">
              <div className={styles.usernamesmall}>{this.props.username}</div>
            </NavLink>
            <NavLink to="/my-wallet">
              <div className={styles.balance}>
                {this.props.balances.kovan.swt} xDAI
              </div>
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

const mapStateToProps = createStructuredSelector({
  username: getUsername,
  balances: getUserBalances,
  avatar: getUserAvatar
});

const mapDispatchToProps = dispatch => ({
  //addHashtag: name => dispatch({ type: "ADD_HASHTAG", hashtag: { name } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyInfo);
