import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../context';
import Info from '../components/info';

const Favorites = () => {
  // items.map(item => console.log(item) )
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content" style={{padding: "20px 0"}}>
      {favorites.length > 0 
        ? 
          <>
            <div className='content_top'>
              <h1>My Favourites Sneakers</h1> 
            </div>
              <div className='cards'>
              {favorites.map((item, index) => {
              return <Card 
                key={index}
                favorited={true}
                onFavorite={onAddToFavorite}
                {...item}
                />
              })}
            </div>
          </>
      : 
        <>
          <Info 
            title={"You have empty bookmark :("} 
            image={"tired"} 
            text={"You add nothing in bookmark "}
            toMainPage
            />
        </>
    }
    
    </div>
  );
};

export default Favorites;