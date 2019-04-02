import React from "react";
import MyInfo from "../../components/my-info.js";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import HashtagListItem from "./hashtagListItem.js";
import { Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

// Styles
import styles from "../../styles.module.css";
import hashtaglist from "../../hashtag-list.module.css";

// Selectors
import { getHashtagListOnlyShown } from "../../services/hashtagList/selectors";

class HashtagListRoot extends React.Component {
  render() {
    return (
      <div className={hashtaglist.container}>
        <div
          onClick={this.props.addHashtag.bind(this, "My hashtag")}
          className={[styles.iconbuttonbig, hashtaglist.plusbutton].join(" ")}
        >
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
              key={hashtag.address}
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

HashtagListRoot.propTypes = {
  hashtag: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  hashtags: getHashtagListOnlyShown
});

const mapDispatchToProps = dispatch => ({
  addHashtag: name => dispatch({ type: "ADD_HASHTAG", hashtag: { name } })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HashtagListRoot);
