import React from "react";
import styles from "../../hashtag-list.module.css";
import UserAvatar from 'react-user-avatar'
export default class HashtagListItem extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <div className={styles.hashtaglistitem}>
                <div className={styles.content}>
                    <div className={styles.hashtaglistname}>
                        #{this.props.hashtagname}
                    </div>
                    <div className={styles.completed}>
                        {this.props.completed} deals completed
                </div>
                    <div className={styles.arrow}></div>
                </div>
            </div>
        )
    }
}