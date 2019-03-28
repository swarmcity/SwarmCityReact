import React from "react";
import styles from "../../styles.module.css";
import MyInfo from "../../components/my-info.js";
import NewItemEdit from "./pages/NewItemEdit";
import newItem from "../../new-item.module.css";

export default class NewItemRoot extends React.Component {
  render() {
    return (
      <div className={newItem.container}>
        <div className={newItem.topcontainer}>
          <MyInfo />
          <div className={newItem.hashtagname}>#GetSWT</div>
        </div>
        <NewItemEdit />
        {/* here the replies */}
      </div>
    );
  }
}
