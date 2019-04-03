import React from "react";
import UserAvatar from "react-user-avatar";
import { NavLink } from "react-router-dom";
import styles from "../../styles.module.css";
import hashtag from "../../hashtag.module.css";

export default class ItemDetail extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
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
        <div
          className={hashtag.closeitem}
          onClick={() => window.history.back()}
        >
          <div className={styles.exitgrayicon} />
        </div>
        <div className={styles.item}>
          <div>
            <div className={hashtag.description}>
              {this.props.item.description}
            </div>
            <div className={hashtag.timestamp}>{this.props.item.timestamp}</div>
          </div>
          <div className={hashtag.replies} />
          <div className={hashtag.avatar}>
            <UserAvatar
              size="36"
              name={this.props.item.seekername}
              src={this.props.item.avatar}
            />
            <div className={hashtag.username}>
              {this.props.item.seekername} - {this.props.item.seekerrep} SWR
            </div>
          </div>
          <div className={hashtag.valuebox}>
            <div className={hashtag.currency}>xDAI</div>
            <div className={hashtag.value}>{this.props.item.amount}</div>
          </div>
        </div>
      </NavLink>
    );
  }
}
