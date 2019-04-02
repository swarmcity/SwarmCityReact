// Imports
import React from "react";
import MyInfo from "../../components/my-info.js";
import ItemDetail from "./ItemDetail.js";
import itemdetailstyles from "../../item-detail.module.css";
import PropTypes from "prop-types";

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
          <MyInfo />
          <div className={itemdetailstyles.hashtagname}>#GetSWT</div>
        </div>
        <ItemDetail item={item} />
        {/* here the replies */}
      </div>
    );
  }
}

ItemDetailRoot.propTypes = {
  item: PropTypes.object.isRequired
};
