import React from "react";
import UserAvatar from "react-user-avatar";
import styles from "../../styles.module.css";
import hashtag from "../../hashtag.module.css";

export default class ItemReply extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div className={hashtag.reply}>
        <div className={hashtag.toprow}>
          <div>{this.props.item.description}</div>
          <div className={hashtag.valuebox}>
            <div className={hashtag.value}>for {this.props.item.amount}</div>
            <div className={hashtag.currency}>xDAI</div>
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
      </div>
    );
  }
}
