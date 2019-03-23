import React from "react";
import styles from "../../hashtag-list.module.css";
import UserAvatar from "react-user-avatar";
import { NavLink } from "react-router-dom";

export default class HashtagListItem extends React.Component {
  componentWillMount() {}
  render() {
    return (
      <NavLink to={"hashtag/" + this.props.hashtagaddress}>
        <div className={styles.hashtaglistitem}>
          <div className={styles.content}>
            <div className={styles.hashtaglistname}>
              #{this.props.hashtagname}
            </div>
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
