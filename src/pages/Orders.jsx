import React from 'react';
import axios from 'axios';

import Card from '../components/Card/Card';
import Info from '../components/info';

import AppContext from '../context';

const Orders = () => {
  const {onAddToFavorite, onAddToCart} = React.useContext(AppContext);

  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://63cbf21a9b72d2a88e050a0a.mockapi.io/orders');
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        alert("Error with order");
      }
    })();
  }, [])
  return (
    <div className="content" style={{padding: "20px 0"}}>
      {orders.length > 0 
        ? 
          <>
            <div className='content_top'>
              <h1>My Orders</h1> 
            </div>
              <div className='cards'>
              {(isLoading ? [...Array(4)] : orders).map((item, index) => {
                return <Card
                key={index}
                loading={isLoading}
                {...item}
                  />
              })}
            </div>
          </>
      : 
        <>
          <Info 
            title={"You have empty order list :("} 
            image={"crying"} 
            text={"You add nothing in order list "}
            toMainPage
            />
        </>
    }
    
    </div>
  );
};

export default Orders;