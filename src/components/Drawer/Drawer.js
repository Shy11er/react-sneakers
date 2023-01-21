import styles from './Drawer.module.scss';
import React from 'react';

const Drawer = ({ onClose, items = [], onClickRemove}) => {
    window.addEventListener('keydown', (ev) => {
        if (ev.isComposing || ev.keyCode === 27) onClose();
    });

    let priceAmount = 0;

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.cart_header}>
                    <h2>Cart</h2>
                    <div onClick={onClose} className={styles.cart_close}>
                        <img  className={styles.closeBtn} src='/assets/close.svg' width={20} height={20} />
                    </div>
                </div>

                {items.length == 0 ? <div className={styles.empty_field}>
                    <img src='/assets/empty_box.jpg'/>
                    <h2>Cast is empty</h2>
                    <p>Add at least one pair of sneakers</p>
                    <button className={styles.orderBtn} onClick={onClose} >Get Back</button>
                </div> : 
                <><div className={styles.carts}>
                    {items.map((obj) => (
                        <div key={obj.id} className={styles.cart_item}>
                            <img src={`/assets/${obj.imageUrl}.jpg`} width={120} height={100} />
                            <div className={styles.cart_item_info}>
                                <div className={styles.cart_item_info_left}>
                                    <h4>{obj.title}</h4>
                                    <b>{obj.price} $</b>
                                </div>
                                <div className={styles.cart_item_info_right}>
                                    <img 
                                        className={styles.removeBtn} 
                                        src='/assets/close.svg' 
                                        width={20} 
                                        height={20} 
                                        onClick={() => onClickRemove(obj.id)}
                                    />
                                    {console.log(obj.id)}
                                </div>
                            </div> 
                        </div>
                    ))}
                </div>

                <ul>
                <li>
                    <span>Total:</span>
                    <div></div>
                    <b>{priceAmount} $</b>
                </li>
                <li>
                    <span>Tax 5%:</span>
                    <div></div>
                    <b>50 $</b>
                </li>
                </ul>
                <button className={styles.orderBtn}>Order</button></>}
            </div>
        </div>
    );
};

export default Drawer;