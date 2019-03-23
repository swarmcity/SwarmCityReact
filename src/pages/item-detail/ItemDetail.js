import React from "react";
import UserAvatar from "react-user-avatar";
import { NavLink } from "react-router-dom";
import "./item-detail.css";
import styles from "../../hashtag.module.css";

export default class ItemDetail extends React.Component {
  componentWillMount() {}
  render() {
    return (
      <NavLink
        to={
          "/item-detail/" +
          this.props.item.hashtagAddress +
          "/" +
          this.props.item.itemId
        }
      >
        <div className="item-container">
          <div>
            <div className={styles.description}>
              {this.props.item.description}
            </div>
            <div className={styles.timestamp}>{this.props.item.timestamp}</div>
          </div>
          <div className="replies">X 1</div>
          <div className={styles.avatar}>
            <UserAvatar
              className="avatar"
              size="24"
              name={this.props.item.seekername}
              src={this.props.item.avatar}
            />
            <div className={styles.username}>
              {this.props.item.seekername} - {this.props.item.seekerrep} SWR
            </div>
          </div>
          <div className={styles.valuebox}>
            <div className={styles.currency}>SWT</div>
            <div className={styles.value}>{this.props.item.amount}</div>
          </div>
        </div>
      </NavLink>
    );
  }
}
