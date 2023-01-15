const Drawer = () => {
    return (
        <div className="overlay" style={{display: 'block'}}>
            <div className="drawer">
                <div className="cart_header">
                <h2>Cart</h2>
                <div className="cart_close">
                    <img className='closeBtn' src='/assets/close.svg' width={20} height={20} />
                </div>
                </div>
                <div className='carts'>
                <div className='cart_item'>
                    <img src="/assets/nike_blaze_mid.jpg" width={120} height={100} />
                    <div className="cart_item_info">
                    <div className='cart_item_info_left'>
                        <h4>Men`s sneakers Nike Blazer Mid Suede</h4>
                        <b>1,099 $</b>
                    </div>
                    <div className="cart_item_info_right">
                        <img className='removeBtn' src='/assets/close.svg' width={20} height={20} />
                    </div>
                    </div> 
                </div>

                <div className='cart_item'>
                    <img src="/assets/nike_blaze_mid.jpg" width={120} height={100} />
                    <div className="cart_item_info">
                    <div className='cart_item_info_left'>
                        <h4>Men`s sneakers Nike Blazer Mid Suede</h4>
                        <b>1,099 $</b>
                    </div>
                    <div className="cart_item_info_right">
                        <img className='removeBtn' src='/assets/close.svg' width={20} height={20} />
                    </div>
                    </div> 
                </div>

                <div className='cart_item'>
                    <img src="/assets/nike_blaze_mid.jpg" width={120} height={100} />
                    <div className="cart_item_info">
                    <div className='cart_item_info_left'>
                        <h4>Men`s sneakers Nike Blazer Mid Suede</h4>
                        <b>1,099 $</b>
                    </div>
                    <div className="cart_item_info_right">
                        <img className='removeBtn' src='/assets/close.svg' width={20} height={20} />
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
                <button className='orderBtn'>ORDER</button>
            </div>
        </div>
    );
};

export default Drawer;