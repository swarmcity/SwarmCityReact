import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styles from "../../styles.module.css";
import hashtagstyles from "../../hashtag.module.css";
import MyInfo from "../../components/my-info";
import { NavLink } from "react-router-dom";
// Selectors
import {
  getHashtagByHashtagAddress,
  getItemsByHashtagAddress
} from "../../services/hashtags/selectors";
// Actions
import { fetchHashtag } from "../../services/hashtags/actions";
import HashtagItem from "./HashtagItem.jsx";

/**
 * @param {Array} items = [{
 *   description: "Sell SWT 10,000 for 3 BTC",
 *   timestamp: "12 Mar 1979 - 12:34",
 *   seekername: "Danny",
 *   amount: 30,
 *   seekerrep: 10,
 *   completed: 4,
 *   hashtagAddress: "0xjacques",
 *   itemId: "0xabc"
 * }, ... ]
 */

function HashtagRoot({
  hashtagAddress,
  hashtag = {},
  items = [],
  fetchHashtag
}) {
  useEffect(() => {
    fetchHashtag(hashtagAddress);
  }, []);

  return (
    <div className={hashtagstyles.container}>
      <div className={hashtagstyles.topcontainer}>
        <div className={hashtagstyles.toprow}>
          <MyInfo />
          <NavLink to="/hashtag-list" className={styles.backicon} />
        </div>
        <div
          className={hashtagstyles.hashtagname}
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          {hashtag.name}
        </div>
        <div className={hashtagstyles.filterbox}>filter requests</div>
      </div>

      <div className={hashtagstyles.hashtagitems}>
        {items.map(item => (
          <NavLink
            key={item.itemId}
            to={"/item-detail/" + hashtagAddress + "/" + item.itemId}
          >
            <HashtagItem display="small" item={item} />
          </NavLink>
        ))}
      </div>

      <NavLink
        to="/new-item"
        className={[styles.iconbuttonbig, hashtagstyles.plusbutton].join(" ")}
      >
        <div className={styles.plusblueicon} />
      </NavLink>
    </div>
  );
}

const mapStateToProps = (_, ownProps) => {
  const { hashtagAddress } = (ownProps.match || {}).params || {};
  return createStructuredSelector({
    hashtagAddress: () => hashtagAddress,
    hashtag: state => getHashtagByHashtagAddress(state, hashtagAddress),
    items: state => getItemsByHashtagAddress(state, hashtagAddress)
  });
};

const mapDispatchToProps = {
  fetchHashtag
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HashtagRoot);
