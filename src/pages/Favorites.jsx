import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../context';

const Favorites = ({ items = [], onAddToFavorite}) => {
  // items.map(item => console.log(item) )
  const state = React.useContext(AppContext);
  console.log(state)

  return (
    <div className="content">
      <div className='content_top'>
        <h1>My Favourites Sneakers</h1>
        
      </div>
      <div className='cards'>
      {items.map((item, index) => {
        return <Card 
          key={index}
          favorited={true}
          onFavorite={onAddToFavorite}
          {...item}
          />
        })}
      </div>
    </div>
  );
};

export default Favorites;