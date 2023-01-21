import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header";
import Drawer from './components/Drawer/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

// import items from './dataFav.json';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    async function fetchData() {
      const cartsResponse = await axios.get("https://63c418a0a908563575316ae6.mockapi.io/carts");
      const favoritesResponse = await axios.get("https://63c418a0a908563575316ae6.mockapi.io/favourites");
      const data_items = await require('./dataFav.json');

      setCartItems(cartsResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(data_items);
    }

    fetchData();
  }, []);

  const onRemoveCastItem = (id) => {
    axios.delete(`https://63c418a0a908563575316ae6.mockapi.io/carts/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://63c418a0a908563575316ae6.mockapi.io/favourites/${obj.id}`);
        // setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post("https://63c418a0a908563575316ae6.mockapi.io/favourites", obj)
        setFavorites((prev) => [...prev, data]);
      }
    } catch (err) {
      alert('Error');
      console.error(err);
    }
  };

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://63c418a0a908563575316ae6.mockapi.io/carts/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } 
    else {
      axios.post("https://63c418a0a908563575316ae6.mockapi.io/carts", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (  
    <div className='wrapper'>
      { cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onClickRemove={onRemoveCastItem}/> }
      <Header onCLickCart={() => setCartOpened(true)} />
      <Routes>
        <Route exact path='/' element={
          <Home 
            items={items}
            searchValue={searchValue} 
            cartItems={cartItems}
            setSearchValue={setSearchValue} 
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
          />} 
        />
        <Route exact path='/favorites' element={
          <Favorites 
            items={favorites}
            searchValue={searchValue} 
            setSearchValue={setSearchValue} 
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
          />} 
        />
      </Routes>
    </div>
  );
}

export default App;