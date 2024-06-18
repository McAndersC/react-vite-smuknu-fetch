import { useState } from 'react';
import styles from './navigation.module.css'
import { Link } from 'react-router-dom';
const Navigation = () => {


    return (
        <div className={`${styles.navigation}`}>
            
            <div className={styles.bar}>
                
                <Link to="/">HOME</Link>  <Link to="/products">PRODUCTS</Link> <Link to="/reviews">REVIEWS</Link> <Link to="/bliv-medlem">BLIV-MEDLEM</Link>
        
            </div>

        </div>
    );
};
export default Navigation;