import React from 'react';
import axios from 'axios';

import styles from './Drawer.module.scss';
import Info from '../info';

import { useCart } from '../../hooks/useCart';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onClose, items = [], onClickRemove}) => {
    const [orderId, setOrderId] = React.useState(null);
    const [isOrderComplete, setIsOrderConplete] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false)
    const { cartItems, setCartItems, totalPrice } = useCart();

    const onCLickOrder = async () => {
        try {
            setIsLoaded(true);
            const { data } = await axios.post('https://63cbf21a9b72d2a88e050a0a.mockapi.io/orders', {items: cartItems});
            // await axios.put('https://63c418a0a908563575316ae6.mockapi.io/carts', [])
            setOrderId(data.id);
            setIsOrderConplete(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://63c418a0a908563575316ae6.mockapi.io/carts' + item.id);
                await delay(1000);
            }

        } catch (error) {
            alert('Error');
            console.error(error);
        }
        setIsLoaded(false);
    }

    window.addEventListener('keydown', (ev) => {
        if (ev.isComposing || ev.keyCode === 27) onClose();
    });

    const priceAmount = items.reduce((prev, obj) => obj.price + prev, 0);

    return (
        <div className={styles.overlay}>
            <div className={styles.drawer}>
                <div className={styles.cart_header}>
                    <h2>Cart</h2>
                    <div onClick={onClose} className={styles.cart_close}>
                        <img  className={styles.closeBtn} src='/assets/close.svg' width={20} height={20} />
                    </div>
                </div>

                {items.length > 0 
                  ? 
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
                        <b>{priceAmount / 100 * 5} $</b>
                    </li>
                    </ul>
                    <button disabled={isLoaded} onClick={onCLickOrder} className='orderBtn'>Order</button></>
                  :
                    <Info 
                        image={isOrderComplete ? 'order_accept' : 'empty_box'} 
                        title={isOrderComplete ? "Order is processed!" : "Cast is empty"} 
                        text={isOrderComplete 
                            ? `Your order #${orderId} will be transferred to the delivery service`
                            : "Add at least one pair of sneakers"} 
                        onClick={onClose}
                    />  
                }
            </div>
        </div>
    );
};

export default Drawer;