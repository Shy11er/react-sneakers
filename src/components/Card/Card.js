import { useState, useContext } from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';

import styles from './Card.module.scss';

function Card ({ 
    id,
    title,
    imageUrl,
    price,
    onFavorite,
    onLike,
    favorited=false,
    loading=false 
  }) {

  const { isItemAdded } = useContext(AppContext);
  
  const [heart, setHeart] = useState(favorited);
  const obj = { id, title, imageUrl, price };

  const onClickPlus = () => {
    onLike(obj);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    // console.log(obj)
    setHeart(!heart);
  }
  
  return (
    <div className={styles.card}>
        {
          loading ? 
            <ContentLoader 
                speed={2}
                width={150}
                height={192}
                viewBox="0 0 150 192"
                backgroundColor="#ededed"
                foregroundColor="#e0e0e0"
              >
              <rect x="0" y="0" rx="4" ry="4" width="150" height="90" /> 
              <rect x="0" y="105" rx="4" ry="4" width="150" height="15" /> 
              <rect x="0" y="130" rx="4" ry="4" width="100" height="15" /> 
              <rect x="0" y="160" rx="4" ry="4" width="100" height="32" /> 
              <rect x="120" y="160" rx="4" ry="4" width="32" height="32" />
            </ContentLoader>
          :
            <>
              <img 
                onClick={onClickFavorite} 
                className={styles.unliked} 
                src={`/assets/${ heart == 0 ? 'unliked' : 'liked'}.svg`} 
                width={20} 
                height={20} 
              />
              <img width={130} height={110} src={`/assets/${imageUrl}.jpg`} />
              <h5>{title}</h5>
              <div className={styles.card_info}>
              <div className={styles.card_info_left}>
                  <p>Price:</p>
                  <b>{price} $</b>       
              </div>
              <button className={styles.btn_plus} onClick={() => {onClickPlus()}}>
                  <img src={`/assets/${!isItemAdded(id) ? 'plus' : 'check'}.svg`} />
              </button>
              </div>
            </>
      }
    </div>
  );
};

export default Card