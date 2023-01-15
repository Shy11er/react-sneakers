import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from './components/Drawer/Drawer';

function App() {
  const [data, setData] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://63c418a0a908563575316ae6.mockapi.io/items')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setData(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  };

  console.log(cartItems);

  return (  
    <div className='wrapper'>
      { cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> }
      <Header onCLickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className='content_top'>
          <h1>All Sneakers</h1>
          <input placeholder="Search..." />
        </div>
        <div className='cards'>
          {data.map((val) => {
            return <Card 
              title={val.title} 
              imageUrl={val.imageUrl} 
              price={val.price} 
              onFavourite={() => console.log('first')}
              onLike={(obj) => onAddToCart(obj)}  
            />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;