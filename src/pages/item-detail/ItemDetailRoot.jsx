import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import itemdetailstyles from "../../item-detail.module.css";
import styles from "../../styles.module.css";
import MyInfo from "../../components/my-info";
import ItemDetail from "./ItemDetail";
import ItemReply from "./ItemReply";
// Selectors
import { getItemByHashtagAddressAndItemId } from "../../services/hashtags/selectors";
// Actions
import { fetchHashtag } from "../../services/hashtags/actions";

// const item = {
//   description: "Another SWT giveaway to first NEW USER to see this!!",
//   timestamp: "12 Mar 1979 - 12: 34",
//   seekername: "Danny",
//   amount: 30,
//   seekerrep: 10,
//   completed: 2,
//   hashtagAddress: "0xjac",
//   itemId: "0xabc"
// };

function ItemDetailRoot({ item = {}, hashtagAddress, fetchHashtag }) {
  useEffect(() => {
    fetchHashtag(hashtagAddress);
  }, []);

  function doReply() {
    alert("reply");
  }

  return (
    <div className={itemdetailstyles.container}>
      <div className={itemdetailstyles.topcontainer}>
        <div className={itemdetailstyles.toprow}>
          <MyInfo />
          <div
            className={styles.exitgrayicon}
            onClick={() => {
              window.history.back();
            }}
          />
        </div>
        <div className={itemdetailstyles.hashtagname}>#GetSWT</div>
      </div>
      <ItemDetail item={item} />
      <ItemReply item={item} />

      <div
        onClick={() => doReply}
        className={[styles.iconbuttonbig, itemdetailstyles.replybutton].join(
          " "
        )}
      >
        <div className={styles.replyblueicon} />
      </div>
    </div>
  );
}

ItemDetailRoot.propTypes = {
  item: PropTypes.object
};

const mapStateToProps = (_, ownProps) => {
  const { hashtagAddress, itemId } = (ownProps.match || {}).params || {};
  return createStructuredSelector({
    hashtagAddress: () => hashtagAddress,
    item: state =>
      getItemByHashtagAddressAndItemId(state, hashtagAddress, itemId)
  });
};

const mapDispatchToProps = {
  fetchHashtag
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetailRoot);
