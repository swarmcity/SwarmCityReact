import React from "react";
import styles from "../../styles.module.css";
import hashtaglist from "../../hashtag-list.module.css";
import MyInfo from "../../components/my-info.js";
import ScIcon from "../../components/sc-icon.js";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import HashtagListItem from "./hashtagListItem.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class HashtagListRouter extends React.Component {
  render() {
    return (
      <div
        className={hashtaglist.container}
        onClick={this.props.addHashtag.bind(this, "My hashtag")}
      >
        <div className={styles.iconbuttonbig}>
          <div className={styles.plusicon} />
        </div>

        <div className={hashtaglist.topcontainer}>
          <MyInfo />
          <NavLink to="/">
            <div className={styles.exiticon} />
          </NavLink>
        </div>
        <div className={hashtaglist.container}>
          {this.props.hashtags.map(hashtag => (
            <HashtagListItem
              hashtagname={hashtag.name}
              completed={hashtag.completed}
              hashtagaddress={hashtag.address}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hashtags: state.hashtags
});

const mapDispatchToProps = dispatch => ({
  addHashtag: name => dispatch({ type: "ADD_HASHTAG", hashtag: { name } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HashtagListRouter);
