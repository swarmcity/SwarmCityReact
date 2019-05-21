import React from "react";
import styles from "styles.module.css";
import rideshare from "ride-share.module.css";
import ScMap from "components/sc-map.jsx";
import MyInfo from "components/my-info.js";

export default class MapView extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
       
      <div className={rideshare.container}>
          
        <div className={rideshare.topcontainer}>
          <MyInfo />
          <div className={rideshare.hashtagname}>#RideShare</div>
        </div>
        <div className={rideshare.addclose}>
          <div
            className={rideshare.closeitem}
            onClick={() => window.history.back()}
          >
            <div className={styles.exitgrayicon} />
          </div>
        </div>
        <div className={rideshare.map}>
            <ScMap></ScMap>
        </div>
        <div className={styles.item}>
          <div>
            <div className={rideshare.userinputbox}>
              <label
                htmlFor="itemdescription"
                className={rideshare.usernameinputlabel}
              >
                What are you looking for?
              </label>

              <div className={rideshare.usernameinputbox}>
                <input
                  id="itemdescription"
                  className={rideshare.usernameinput}
                  placeholder="What are you looking for?"
                />
              </div>
            </div>
            <div className={rideshare.valueinputbox}>
              <input
                className={rideshare.valueinput}
                placeholder="What is your offer?"
              />
              <div className={rideshare.currency}>xDAI</div>
            </div>
            <div className={rideshare.hashtagfee}>+ 0.002 xDAI hashtagfee</div>
          </div>
        </div>
        <div className={rideshare.infobox}>
          <div className={rideshare.totalcost}>
            <div>Total Cost: </div>
            <div className={rideshare.totalcostbold}>9.005 xDAI</div>
          </div>

          <div
            className={rideshare.iconbuttonbigblue}
            onClick={this.props.nextStage}
          >
            <div className={styles.nextwhiteicon} />
          </div>
        </div>
      </div>
    );
  }
}
