import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Drawer from './components/Drawer/Drawer';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [data, setData] = useState([]);
  const [sameCarts, setSameCarts] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://63c418a0a908563575316ae6.mockapi.io/items')
      .then((res) => {
        setData(res.data);
      });
    axios.get("https://63c418a0a908563575316ae6.mockapi.io/carts")
      .then((res) => {
        setCartItems(res.data);
      })
  }, []);

  const onRemoveCastItem = (id) => {
    // console.log(id);
    axios.delete(`https://63c418a0a908563575316ae6.mockapi.io/carts/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  };

  const onAddToCart = (obj) => {
    if (!(sameCarts.includes(obj.title) && sameCarts.includes(obj.imageUrl) && sameCarts.includes(obj.price))) {
      axios.post("https://63c418a0a908563575316ae6.mockapi.io/carts", obj);
      setSameCarts(prev => [...prev, obj.title, obj.imageUrl, obj.price]);
      setCartItems(prev => [...prev, obj]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (  
    <div className='wrapper'>
      { cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onClickRemove={onRemoveCastItem}/> }
      <Header onCLickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className='content_top'>
          <h1>{!searchValue ? "All Sneakers" : `Search by '${searchValue}'`}</h1>
          { searchValue ? <img className='closeSearch' src='/assets/close.svg' onClick={() => setSearchValue('')} width={20} height={20} /> : null}
          <img className='search_input' src='/assets/search.svg' />
          <input onChange={onChangeSearchInput} placeholder="Search..." value={searchValue} />
        </div>
        <div className='cards'>
          {data
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((val, index) => {
              return <Card 
                key={index}
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