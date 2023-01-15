import styles from './Drawer.module.scss';

const Drawer = () => {
    return (
        <div className={styles.overlay} style={{display: 'block'}}>
            <div className={styles.drawer}>
                <div className={styles.cart_header}>
                <h2>Cart</h2>
                <div className={styles.cart_close}>
                    <img className={styles.closeBtn} src='/assets/close.svg' width={20} height={20} />
                </div>
                </div>
                <div className={styles.carts}>
                <div className={styles.cart_item}>
                    <img src="/assets/nike_blaze_mid.jpg" width={120} height={100} />
                    <div className={styles.cart_item_info}>
                    <div className={styles.cart_item_info_left}>
                        <h4>Men`s sneakers Nike Blazer Mid Suede</h4>
                        <b>1,099 $</b>
                    </div>
                    <div className={styles.cart_item_info_right}>
                        <img className={styles.removeBtn} src='/assets/close.svg' width={20} height={20} />
                    </div>
                    </div> 
                </div>

                <div className={styles.cart_item}>
                    <img src="/assets/nike_blaze_mid.jpg" width={120} height={100} />
                    <div className={styles.cart_item_info}>
                    <div className={styles.cart_item_info_left}>
                        <h4>Men`s sneakers Nike Blazer Mid Suede</h4>
                        <b>1,099 $</b>
                    </div>
                    <div className={styles.cart_item_info_right}>
                        <img className={styles.removeBtn} src='/assets/close.svg' width={20} height={20} />
                    </div>
                    </div> 
                </div>

                <div className={styles.cart_item}>
                    <img src="/assets/nike_blaze_mid.jpg" width={120} height={100} />
                    <div className={styles.cart_item_info}>
                    <div className={styles.cart_item_info_left}>
                        <h4>Men`s sneakers Nike Blazer Mid Suede</h4>
                        <b>1,099 $</b>
                    </div>
                    <div className={styles.cart_item_info_right}>
                        <img className={styles.removeBtn} src='/assets/close.svg' width={20} height={20} />
                    </div>
                    </div> 
                </div>

                </div>

                <ul>
                <li>
                    <span>Total:</span>
                    <div></div>
                    <b>3,300 $</b>
                </li>
                <li>
                    <span>Tax 5%:</span>
                    <div></div>
                    <b>50 $</b>
                </li>
                </ul>
                <button className={styles.orderBtn}>ORDER</button>
            </div>
        </div>
    );
};

export default Drawer;