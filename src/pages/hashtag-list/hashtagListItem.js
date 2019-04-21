import React from "react";
import hashtaglist from "../../hashtag-list.module.css";
import { NavLink } from "react-router-dom";
import styles from "../../styles.module.css";

export default class HashtagListItem extends React.Component {
  componentWillMount() {}
  render() {
    return (
      <NavLink to={"hashtag/" + this.props.hashtagaddress}>
        <div className={hashtaglist.hashtaglistitem}>
          <div className={hashtaglist.itemcontent}>
            <div className={hashtaglist.hashtaglistname}>
              #{this.props.hashtagname}
            </div>
          </div>
          <div className={hashtaglist.completed}>
            {this.props.completed}0 deals completed
          </div>
        </div>
      </NavLink>
    );
  }
}
