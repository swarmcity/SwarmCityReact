import React from "react";
import styles from "../../styles.module.css";
import MyInfo from "../../components/my-info.js";
import HashtagInfo from "../../components/hashtag-info.js";
import ItemDetail from "./ItemDetail.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class ItemDetailRouter extends React.Component {
    render() {
        return (
            <div className="container">
                <MyInfo></MyInfo>
                <HashtagInfo></HashtagInfo>
                <ItemDetail description="hello" seekername="flurkel"></ItemDetail>
                {/* here the replies */}
            </div>
        )
    }

}