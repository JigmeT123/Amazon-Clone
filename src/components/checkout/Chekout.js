import React from 'react'
import styles from './checkout.module.css';
import SubTotal from '../subTotal/SubTotal';
const Chekout = () => {
    return (
        <div className={styles.checkout}>
            <div className={styles.checkout_left}>
                <img
                    className={styles.checkout__ads}
                    src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/GCLP/EGCU_D_1024x180_v1_EN_20200318._CB1584039996_.jpg"
                    alt="amazon banner"/>

                <div>
                    <h2 className={styles.checkout__title}>Your Shopping Cart</h2>
                </div>
            </div>
            <div className={styles.checkout__right}>
                <SubTotal/>
                <h2>The sub total will go here</h2>
            </div>
        </div>
    )

}

export default Chekout
