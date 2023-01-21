import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ id, title, imageUrl, price, onFavorite, onLike, favorited=false, added=true }) => {
  const [like, setLike] = useState(added);
  const [heart, setHeart] = useState(favorited);
  const obj = { id, title, imageUrl, price };

  const onClickPlus = () => {
    onLike(obj);
    setLike(!like);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    // console.log(obj)
    setHeart(!heart);
  }
  
  return (
    <div className={styles.card}>
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
        <button onClick={() => {onClickPlus()}}>
            <img src={`/assets/${like == 0 ? 'plus' : 'check'}.svg`} />
        </button>
        </div>
    </div>
  );
};

export default Card