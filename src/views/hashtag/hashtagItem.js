import React from "react";
import styles from "../../hashtag.module.css";
import UserAvatar from "react-user-avatar";
import { NavLink } from "react-router-dom";

export default class HashtagItem extends React.Component {
  componentWillMount() {}
  render() {
    return (
      <NavLink
        to={
          "item-detail/" + this.props.hashtagAddress + "/" + this.props.itemId
        }
      >
        <div className={styles.hashtagitem}>
          <div className={styles.content}>
            <div className={styles.hashtagname}>#{this.props.hashtagname}</div>
            <div className={styles.completed}>
              {this.props.completed} deals completed
            </div>
            <div className={styles.arrow} />
          </div>
        </div>
      </NavLink>
    );
  }
}
