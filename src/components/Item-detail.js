import React from "react";
import styles from "./styles.module.css";
import UserAvatar from 'react-user-avatar'

export default class ItemDetail extends React.Component {
    render() {
        return (
            <div className={styles.item}>
                <div className={styles.description}>{this.props.description}</div>
                <div className={styles.timestamp}>{this.props.timestamp}</div>
                <div className={styles.itembottom}>
                <div className={styles.user}>
                    <UserAvatar className={styles.avatar} size="48" name={this.props.seekername} src={this.props.avatar} />
                    <div className={styles.username}>{this.props.seekername} - {this.props.seekerrep}</div>
                </div>
                <div className={styles.amount}>
                    <div className={styles.currency}>SWT</div>
                    <div className={styles.value}>{this.props.amount}</div> 
                </div>
                </div>
            </div>
        ) 
    }
}