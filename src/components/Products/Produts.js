import React from 'react'
import styles from './product.module.css';
import {Button} from '@material-ui/core';
const Produts = ({title, image, price, rating}) => {
    return (
        <div className={styles.products}>
            <div className={styles.products__info}>
                <p>{title}</p>
                <p className={styles.products__price}>
                    <small>$ </small>
                    <strong>{price}</strong>
                </p>
                <div className={styles.products__rating}>
                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (<p>⭐️</p>))
                    }

                </div>
            </div>
            <img src={image} alt="product 1"/>
            <Button>
                Add to Basket
            </Button>
        </div>
    )
}

export default Produts
