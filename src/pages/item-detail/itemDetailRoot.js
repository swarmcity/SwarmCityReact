// Imports
import React from "react";
import PropTypes from "prop-types";
import itemdetailstyles from "../../item-detail.module.css";
import styles from "../../styles.module.css";
import MyInfo from "../../components/my-info.js";
import ItemDetail from "./ItemDetail.js";
import ItemReply from "./ItemReply.js";

const item = {
  description: "Another SWT giveaway to first NEW USER to see this!!",
  timestamp: "12 Mar 1979 - 12: 34",
  seekername: "Danny",
  amount: 30,
  seekerrep: 10,
  completed: 2,
  hashtagAddress: "0xjac",
  itemId: "0xabc"
};

export default class ItemDetailRoot extends React.Component {
  render() {
    return (
      <div className={itemdetailstyles.container}>
        <div className={itemdetailstyles.topcontainer}>
          <div className={itemdetailstyles.toprow}>
            <MyInfo />
            <div className={styles.backicon} />
          </div>
          <div className={itemdetailstyles.hashtagname}>#GetSWT</div>
        </div>
        <ItemDetail item={item} />
        <ItemReply item={item} />
        <ItemReply item={item} />
      </div>
    );
  }
}

ItemDetailRoot.propTypes = {
  item: PropTypes.object.isRequired
};
