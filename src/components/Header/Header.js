import React from 'react'
import styles from './header.module.css';
import {Search, ShoppingCart} from '@material-ui/icons'
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <div className={styles.header}>
            <Link to="/">
                <img
                    className={styles.header__logo}
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Amazon"/>
            </Link>

            <div className={styles.header__search}>
                <input className={styles.header__searchInput} type="text"/>
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

                <div className={styles.header__optionBasket}>
                    <Link to="/checkout">
                        <ShoppingCart/>
                    </Link>

                    <span
                        className={`${styles.header__optionLineTwo} ${styles.header_basketCount}`}>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
