import React from "react";
import styles from "../../styles.module.css";
import welcome from "../../welcome.module.css";
import { NavLink } from "react-router-dom";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        console.log('clicked')

    }
    componentWillMount() {

    }
    render() {
        return (
            <div>
                <div className={welcome.container}>
                    <div className={welcome.language}>
                        {/* <DisplayLanguage></DisplayLanguage> */}
                    </div>
                    <div className={welcome.logo}></div>
                    <div className={welcome.welcometo}>Welcome to</div>
                    <div className={welcome.logotext}>swarm.city</div>
                    <div>
                        <NavLink to="/hashtag-list">
                            <div tabIndex="2" className={welcome.button} onClick={this.handleClick}>
                                <div>
                                    <div className={welcome.buttontext}>enter here</div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className={welcome.status}>Never hold more value than you're willing to lose on a mobile device. This
                    app is in beta. Please expect some minor bugs.</div>
                </div>
            </div>
        )
    }
}

