// Imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Subpages
import Welcome from "./pages/welcome/welcome";
import ItemDetailRoot from "./pages/item-detail/itemDetailRoot";
import HashtagListRoot from "./pages/hashtag-list/hashtagListRoot";
import HashtagRoot from "./pages/hashtag/hashtagRoot";
import NewItemRoot from "./pages/new-item/NewItemRoot";
import CreateAccountRoot from "./pages/create-account/CreateAccountRoot";
import MyWalletRoot from "./pages/my-wallet/MyWalletRoot";
import MyProfileRoot from "./pages/my-profile/MyProfileRoot";

// Styles
import styles from "./styles.module.css";

export default class App extends Component {
  render() {
    return (
      <div className={styles.SwarmCity}>
        <Route exact path="/" component={Welcome} />
        <Route path="/create-account" component={CreateAccountRoot} />
        <Route path="/hashtag-list" component={HashtagListRoot} />
        <Route path="/hashtag/:hashtagAddress" component={HashtagRoot} />
        <Route path="/item-detail/:hashtag/:item" component={ItemDetailRoot} />
        <Route path="/new-item" component={NewItemRoot} />
        <Route path="/my-profile" component={MyProfileRoot} />
        <Route path="/my-wallet" component={MyWalletRoot} />
      </div>
    );
  }
}
