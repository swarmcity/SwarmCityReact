import React from "react";
import styles from "../../styles.module.css";
import hashtaglist from "../../hashtag-list.module.css";
import MyInfo from "../../components/my-info.js";
import ScIcon from "../../components/sc-icon.js";
import { NavLink } from "react-router-dom";

import HashtagListItem from "./hashtagListItem.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class ItemDetailRouter extends React.Component {
  render() {
    const hashtags = [
      { name: "GetSWT", completed: 4 },
      { name: "CommsTasks", completed: 2 },
      { name: "Serendipity", completed: 2 },
      { name: "SC-Support", completed: 1 }
    ];
    return (
      <div className={hashtaglist.container}>
        <div className={styles.topcontainer}>
          <MyInfo />
          <NavLink to="/">
            <ScIcon className={styles.exiticon} icon="exit" />
          </NavLink>
        </div>
        <div className={hashtaglist.container}>
          {hashtags.map(hashtag => (
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
