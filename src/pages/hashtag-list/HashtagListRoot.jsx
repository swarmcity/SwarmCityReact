import React from "react";
import MyInfo from "../../components/my-info";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";

// Styles
import styles from "../../styles.module.css";
import hashtaglist from "../../hashtag-list.module.css";

// Selectors
import { getHashtagListOnlyShown } from "../../services/hashtagList/selectors";

function HashtagListRoot({ hashtags, addHashtag }) {
  return (
    <div className={hashtaglist.container}>
      <div
        onClick={() => addHashtag("My hashtag")}
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
        {hashtags.map(hashtag => (
          <NavLink key={hashtag.address} to={"hashtag/" + hashtag.address}>
            <div className={hashtaglist.hashtaglistitem}>
              <div className={hashtaglist.itemcontent}>
                <div className={hashtaglist.hashtaglistname}>
                  #{hashtag.name}
                </div>
                <div className={styles.nextgreysmallicon} />
              </div>
              <div className={hashtaglist.completed}>
                {hashtag.completed} deals completed
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

HashtagListRoot.propTypes = {
  hashtags: PropTypes.array.isRequired
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
