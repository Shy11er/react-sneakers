import React from 'react';

import Card from "../components/Card/Card";

function Home({ items, cartItems, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite }) {

  return (  
    <div className="content">
      <div className='content_top'>
        <h1>{!searchValue ? "All Sneakers" : `Search by '${searchValue}'`}</h1>
        { searchValue && <img className='closeSearch' src='/assets/close.svg' onClick={() => setSearchValue('')} width={20} height={20} />}
        <img className='search_input' src='/assets/search.svg' />
        <input onChange={onChangeSearchInput} placeholder="Search..." value={searchValue} />
      </div>
      {console.log(cartItems, items)}
      <div className='cards'>
        {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => {
            return <Card 
              key={index}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onLike={(obj) => onAddToCart(obj)} 
              added={cartItems.some((obj) => Number(obj.id) == Number(item.id))}
              {...item}
            />
        })}
      </div>
    </div>
  );
}

export default Home;