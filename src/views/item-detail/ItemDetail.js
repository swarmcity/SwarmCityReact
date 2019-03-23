import React from "react";
import styles from "../../styles.module.css";
import UserAvatar from "react-user-avatar";
import { NavLink } from "react-router-dom";

export default class ItemDetail extends React.Component {
  componentWillMount() {}
  render() {
    if (this.props.display === "small") {
      return (
        <NavLink
          to={
            "/item-detail/" +
            this.props.item.hashtagAddress +
            "/" +
            this.props.item.itemId
          }
        >
          <div className={styles.smallitem}>
            <div className={styles.smalldescription}>
              {this.props.item.description}
            </div>
            <div className={styles.smalltimestamp}>
              {this.props.item.timestamp}
            </div>
            <div className={styles.itembottom}>
              <div className={styles.user}>
                <UserAvatar
                  className={styles.avatar}
                  size="48"
                  name={this.props.item.seekername}
                  src={this.props.item.avatar}
                />
                <div className={styles.username}>
                  {this.props.item.seekername} - {this.props.item.seekerrep}
                </div>
              </div>
              <div className={styles.smallamount}>
                <div className={styles.smallcurrency}>SWT</div>
                <div className={styles.smallvalue}>
                  {this.props.item.amount}
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      );
    } else {
      return (
        <div className={styles.item}>
          <div>{this.props.item.description}</div>
          <div className={styles.timestamp}>{this.props.item.timestamp}</div>
          <div className={styles.itembottom}>
            <div className={styles.user}>
              <UserAvatar
                className={styles.avatar}
                size="48"
                name={this.props.item.seekername}
                src={this.props.item.avatar}
              />
              <div className={styles.username}>
                {this.props.item.seekername} - {this.props.item.seekerrep}
              </div>
            </div>
            <div className={styles.amount}>
              <div className={styles.currency}>SWT</div>
              <div className={styles.value}>{this.props.item.amount}</div>
            </div>
          </div>
        </div>
      );
    }
  }
}
