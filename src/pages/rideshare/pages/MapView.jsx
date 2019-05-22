import React from "react";
import styles from "styles.module.css";
import rideshare from "ride-share.module.css";
import ScMap from "components/sc-map.jsx";
import MyInfo from "components/my-info.js";
import { NavLink } from "react-router-dom";


export default class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 16
    };
  }

  

  componentDidMount() {
    window.scroll(0, 0);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos.coords);
        console.log("this: ", this);
        this.setState({lat: pos.coords.latitude});
        this.setState({lng: pos.coords.longitude});
        //lng = pos.coords.longitude;
        //zoom = 16; 
      });
    } else {
      //x.innerHTML = "Geolocation is not supported by this browser.";
    }
    // get geolocation and set state

  }
  render() {
    return (
       
        <div className={rideshare.container}>
        <div className={rideshare.topcontainer}>
          <div className={rideshare.toprow}>
            <MyInfo />
            <NavLink to="/hashtag-list" className={styles.backicon} />
          </div>
          <div
            className={rideshare.hashtagname}>
            #RideMadrid
          </div>
        </div>
        <div className={rideshare.map}>
            <ScMap lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom}></ScMap>
        </div> <NavLink
        to="/new-item"
        className={[styles.iconbuttonbig, rideshare.plusbutton].join(" ")}
      >
        <div className={styles.plusicon} />
      </NavLink>
    </div>
    );
  }
}
