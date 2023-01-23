import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
// import ContentLoader from "react-content-loader";

import Header from "./components/Header/Header";
import Drawer from './components/Drawer/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

import AppContext from './context';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
     try {
      const [cartsResponse, favoritesResponse, data_items] = await Promise.all([
        axios.get("https://63c418a0a908563575316ae6.mockapi.io/carts"),
        axios.get("https://63c418a0a908563575316ae6.mockapi.io/favourites"),
        require('./dataFav.json')
      ]);
    
      setIsLoading(false);

      setFavorites(favoritesResponse.data);
      setCartItems(cartsResponse.data);
      setItems(data_items);
     } catch (error) {
      console.error(error);
      alert("Error with get api");
     }
    }

    fetchData();
  }, []);

  const onRemoveCastItem = (id) => {
    try {
      axios.delete(`https://63c418a0a908563575316ae6.mockapi.io/carts/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
      alert("Can`t remove the item");
    }
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

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.id) === Number(obj.parentId));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.parentId)));
        await axios.delete(`https://63c418a0a908563575316ae6.mockapi.io/carts/${obj.id}`);
      } 
      else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post("https://63c418a0a908563575316ae6.mockapi.io/carts", obj);
        setCartItems((prev) => 
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {...item, id: data.id,}
            };
            return item;
          }),
        );
      }
    } catch (error) {
      console.error(error);
      alert("Can`t add item to cart");
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }

  return (  
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartItems, setCartOpened, onAddToCart}}>
      <div className='wrapper'>
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onClickRemove={onRemoveCastItem} opened={cartOpened} />  
        <Header onCLickCart={() => setCartOpened(true)} />
        <Routes>
          <Route exact path='/' element={
            <Home 
              items={items}
              cartItens={cartItems}
              searchValue={searchValue} 
              setSearchValue={setSearchValue} 
              onChangeSearchInput={onChangeSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
              isLoading={isLoading}
            />} 
          />
          <Route exact path='/favorites' element={
            <Favorites />} 
          />
          <Route exact path='/orders' element={
            <Orders />} 
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;