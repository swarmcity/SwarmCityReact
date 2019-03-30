import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styles from "../../styles.module.css";
import hashtagstyles from "../../hashtag.module.css";
import MyInfo from "../../components/my-info.js";
import ScIcon from "../../components/sc-icon.js";
import { NavLink } from "react-router-dom";
// Selectors
import { getItemsByHashtag } from "../../services/hashtags/selectors";
import HashtagItem from "./HashtagItem.jsx";

class HashtagRoot extends React.Component {
  render() {
    const items = [
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
        <NavLink to="/new-item">
          <div
            className={[styles.iconbuttonbig, hashtagstyles.plusbutton].join(
              " "
            )}
          >
            <div className={styles.plusblueicon} />
          </div>
        </NavLink>

        <div className={hashtagstyles.topcontainer}>
          <div className={hashtagstyles.toprow}>
            <MyInfo />
            <NavLink to="/hashtag-list">
              <div className={styles.backicon} />
            </NavLink>
          </div>
          <div className={hashtagstyles.hashtagname}>#GetSWT</div>
          <div className={hashtagstyles.filterbox}>filter requests</div>
        </div>

        <div className={hashtagstyles.hashtagitems}>
          {items.map(item => (
            <HashtagItem key={item.itemId} display="small" item={item} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  items: getItemsByHashtag
});

export default connect(mapStateToProps)(HashtagRoot);
