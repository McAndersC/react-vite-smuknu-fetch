import { useState } from "react";
import styles from "./productListItem.module.css";


const Discount = ({percent}) => {

    if(!percent || percent === 0) {

        return null;
        
    }
    
    return (
        <div className={styles.discount}>
            <span className={styles.text}>SPAR</span>
            <span className={styles.percent}>{percent}%</span>
        </div>
    );

};

const ProducListItem = ({ product }) => {

    let convertPrice = product.price.toFixed(2).replace(".", ",");
    const [active, setActive] = useState(true)

    let actvieClss = active ? styles.open : null

    return (

        <div className={`${styles.productListItem} ${actvieClss}`}>
            <div className={styles.header}>
                <Discount percent={product.discountInPercent}></Discount>
                <img src={product.image} />
               
            </div>
            <div className={styles.content}>
                <div>{product.title}</div>
                <div className={styles.footer}>
                    <div className={styles.price}>{convertPrice} kr.</div>
                    <div className={styles.btn}>KØB</div>
                </div>
                
            </div>
        </div>
        
    );

};

export default ProducListItem;