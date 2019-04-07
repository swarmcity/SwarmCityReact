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
          "/item-detail/" +
          this.props.item.hashtagAddress +
          "/" +
          this.props.item.itemId
        }
      >
        <div className={styles.itemcontainer}>
          <div>
            <div className={styles.descriptionsmall}>
              {this.props.item.description}
            </div>
            <div className={styles.timestampsmall}>
              {this.props.item.timestamp}
            </div>
          </div>
          <div className={styles.replies}>
            0 <div className={styles.replygrey4mini} />
          </div>
          <div className={styles.avatar}>
            <UserAvatar
              size="24"
              name={this.props.item.seekername || "no-name"}
              src={this.props.item.avatar || ""}
            />
            <div className={styles.usernamesmall}>
              {this.props.item.seekername} - {this.props.item.seekerrep} SWR
            </div>
          </div>
          <div className={styles.valuebox}>
            <div className={styles.smallcurrency}>xDAI</div>
            <div className={styles.smallvalue}>{this.props.item.amount}</div>
          </div>
        </div>
      </NavLink>
    );
  }
}
