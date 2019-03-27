import React from "react";
import styles from "../../styles.module.css";
import MyInfo from "../../components/my-info.js";
import ItemDetail from "./ItemDetail.js";
import { Route, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ScIcon from "../../components/sc-icon.js";
import itemdetail from "../../item-detail.module.css";

const item = {
  description: "Another SWT giveaway to first NEW USER to see this!!",
  timestamp: "12 Mar 1979 - 12: 34",
  seekername: "Danny",
  amount: 30,
  seekerrep: 10,
  completed: 2,
  hashtagAddress: "0xjacques",
  itemId: "0xabc"
};
export default class ItemDetailRouter extends React.Component {
  render() {
    return (
      <div className={itemdetail.container}>
        <div className={itemdetail.topcontainer}>
          <MyInfo />
          <div className={itemdetail.hashtagname}>#GetSWT</div>
        </div>
        <ItemDetail item={item} />
        {/* here the replies */}
      </div>
    );
  }
}
