import React from 'react'
import styles from './header.module.css';
import {Search} from '@material-ui/icons'
const Header = () => {
    return (
        <div className={styles.header}>
            <img className={styles.header__logo} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"/>
            <div className={styles.header__search}>
                <input className={styles.header__searchInput} type="text" />
                <Search className={styles.header__searchIcon}/>
            </div>

            <div className={styles.header__nav}>
                <div className={styles.header__option}>
                    <span className={styles.header__optionLineOne}>Hello Guest</span>

                    <span className={styles.header__optionLineTwo}>Sign In</span>
                </div>

                <div className={styles.header__option}>
                    <span className={styles.header__optionLineOne}>Returns</span>

                    <span className={styles.header__optionLineTwo}>Orders</span>
                </div>
                <div className={styles.header__option}>
                    <span className={styles.header__optionLineOne}>Your</span>

                    <span className={styles.header__optionLineTwo}>Prime</span>
                </div>
            </div>
        </div>
    )
}

export default Header
