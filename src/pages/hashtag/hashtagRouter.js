import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styles from "../../styles.module.css";
import hashtagstyles from "../../hashtag.module.css";
import MyInfo from "../../components/my-info.js";
import ScIcon from "../../components/sc-icon.js";
import { NavLink } from "react-router-dom";
// Selectors
import { getItemsByHashtag } from "../../services/hashtagList/selectors";

import HashtagItem from "../item-detail/ItemDetail.js";

import { Route, Link } from "react-router-dom";

class HashtagRouter extends React.Component {
  render() {
    const hashtagitems = [
      {
        description: "Sell SWT 10,000 for 3 BTC",
        timestamp: "12 Mar 1979 - 12:34",
        seekername: "Danny",
        amount: 30,
        seekerrep: 10,
        completed: 4,
        hashtagAddress: "0xjacques",
        itemId: "0xabc"
      },
      {
        description: "Bug report",
        timestamp: "12 Mar 1979 - 12: 34",
        seekername: "Danny",
        amount: 30,
        seekerrep: 10,
        completed: 2,
        hashtagAddress: "0xjacques",
        itemId: "0xabc1"
      },
      {
        description: "Another SWT giveaway to first NEW USER to see this!!",
        timestamp: "12 Mar 1979 - 12: 34",
        seekername: "Danny",
        amount: 30,
        seekerrep: 10,
        completed: 2,
        hashtagAddress: "0xjacques",
        itemId: "0xabc2"
      }
    ];
    return (
      <div className={hashtagstyles.container}>
        <div className={styles.iconbuttonbig}>
          <div className={styles.plusblueicon} />
        </div>

        <div className={hashtagstyles.topcontainer}>
          <div className={hashtagstyles.toprow}>
            <MyInfo />
            <NavLink to="/hashtag-list">
              <div className={styles.exiticon} />
            </NavLink>
          </div>
          <div className={hashtagstyles.hashtagname}>#GetSWT</div>
          <div className={hashtagstyles.filterbox}>filter requests</div>
        </div>

        <div className={hashtagstyles.hashtagitems}>
          {hashtagitems.map(item => (
            <HashtagItem key={item.itemId} display="small" item={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  hashtags: getItemsByHashtag
});

export default connect(mapStateToProps)(HashtagRouter);
