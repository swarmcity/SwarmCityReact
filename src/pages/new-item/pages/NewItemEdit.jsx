import React from "react";
import styles from "styles.module.css";
import newitem from "new-item.module.css";
import MyInfo from "components/my-info";

export default class NewItemEdit extends React.Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div className={newitem.container}>
        <div className={newitem.topcontainer}>
          <MyInfo />
          <div className={newitem.hashtagname}>#GetSWT</div>
        </div>
        <div className={newitem.addclose}>
          <div
            className={newitem.closeitem}
            onClick={() => window.history.back()}
          >
            <div className={styles.exitgrayicon} />
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <div className={newitem.userinputbox}>
              <label
                htmlFor="itemdescription"
                className={newitem.usernameinputlabel}
              >
                What are you looking for?
              </label>

              <div className={newitem.usernameinputbox}>
                <input
                  id="itemdescription"
                  className={newitem.usernameinput}
                  placeholder="What are you looking for?"
                />
              </div>
            </div>
            <div className={newitem.valueinputbox}>
              <input
                className={newitem.valueinput}
                placeholder="What is your offer?"
              />
              <div className={newitem.currency}>xDAI</div>
            </div>
            <div className={newitem.hashtagfee}>+ 0.002 xDAI hashtagfee</div>
          </div>
        </div>
        <div className={newitem.infobox}>
          <div className={newitem.totalcost}>
            <div>Total Cost: </div>
            <div className={newitem.totalcostbold}>9.005 xDAI</div>
          </div>

          <div
            className={newitem.iconbuttonbigblue}
            onClick={this.props.nextStage}
          >
            <div className={styles.nextwhiteicon} />
          </div>
        </div>
      </div>
    );
  }
}
