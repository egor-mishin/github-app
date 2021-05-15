import * as React from 'react'
import Avatar from './Avatar'
import UserName from './UserName'
import UserLink from './UserLink'
import Following from './Following'
import Followers from './Followers'
import styles from './index.module.css'

const SideBar = (props) => {
    return (
        <div>
            <Avatar />
            <UserName />
            <UserLink />

            <div className={styles.followContainer}>
                <Followers />
                <Following />
            </div>
        </div>
    )
}

export default SideBar