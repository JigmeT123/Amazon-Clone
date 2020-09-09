import React from 'react'
import styles from './home.module.css';
import Products from '../Products/Produts';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.home__container}>
                <img
                    className={styles.home_image}
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
                    alt="Homepage banner img"/>

                <div className={styles.home__row}>
                    <Products
                        id="1"
                        title="NIKE - All the Swoosh styles"
                        price={25.56}
                        image="https://content.asos-media.com/-/media/homepages/mw/2020/08/31/mw_nike_moment_870x1110.jpg"
                        rating={4}/>

                    <Products
                        id="2"
                        title="ADIDAS Originals t-shirt with circle trefoil print in black adidas Originals t-shirt with circle trefoil print in black"
                        price={40.59}
                        rating={5}
                        image="//images.asos-media.com/products/adidas-originals-t-shirt-with-circle-trefoil-print-in-black/14658289-1-black?$n_480w$&wid=476&fit=constrain"/>

                </div>

                <div className={styles.home__row}>
                    <Products
                        id="3"
                        title="COLLUSION oversized long sleeve t-shirt with skate print in pink tie dye"
                        price={20.9}
                        rating={4}
                        image="//images.asos-media.com/products/collusion-oversized-long-sleeve-t-shirt-with-skate-print-in-pink-tie-dye/20250021-1-pink?$n_480w$&wid=476&fit=constrain"/>
                    <Products
                        id="4"
                        title="Crooked Tongues co-ord cut & sew t shirt with logo"
                        price={50.8}
                        rating={3}
                        image="//images.asos-media.com/products/crooked-tongues-co-ord-cut-sew-t-shirt-with-logo/20806857-1-purple?$n_480w$&wid=476&fit=constrain"/>
                    <Products
                        id="5"
                        title="ASOS DESIGN long sleeve waffle t-shirt in black"
                        price={26.9}
                        rating={5}
                        image="//images.asos-media.com/products/asos-design-long-sleeve-waffle-t-shirt-in-black/20966487-1-black?$n_480w$&wid=476&fit=constrain"/>

                </div>

                <div className={styles.home__row}></div>
            </div>
        </div>
    )
}

export default Home
