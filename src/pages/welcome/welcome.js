import React from "react";
import styles from "../../styles.module.css";
import welcome from "../../welcome.module.css";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Welcome = () => (
  <div className={welcome.container}>
    <div className={welcome.language}>
      {/* <DisplayLanguage></DisplayLanguage> */}
    </div>
    <div className={welcome.logo} />
    <div className={welcome.welcometo}>Welcome to</div>
    <div className={welcome.logotext}>swarm.city</div>
    <div>
      <NavLink to="/hashtag-list">
        <div tabIndex="2" className={welcome.button}>
          <div>
            <div className={welcome.buttontext}>enter here</div>
          </div>
        </div>
      </NavLink>
    </div>
    <div className={welcome.status}>
      Never hold more value than you're willing to lose on a mobile device. This
      app is in beta. Please expect some minor bugs.
    </div>
  </div>
);
export default Welcome;

//export default Welcome;
