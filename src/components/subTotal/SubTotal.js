import React from 'react'
import styles from './subtotal.module.css';
import CurrencyFormat from 'react-currency-format';
import {Button} from '@material-ui/core';
const SubTotal = () => {
    return (
        <div className={styles.subtotal}>
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        subtotal (0 items): <strong>0</strong>
                    </p>
                    <small className={styles.subtotal__gift}>
                        <input type="checkbox" /> This orders contains a gift 
                    </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <Button>Proceed to Checkout</Button>
        </div>
    )
}

export default SubTotal 
