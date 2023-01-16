import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ title, imageUrl, price, onFavourite, onLike }) => {
  const [like, setLike] = useState(false);
  const [heart, setHeart] = useState(false);

  const onClickPlus = () => {
    onLike({title, imageUrl, price});
    setLike(!like);
  };

  const onClickFavourite = () => {
    onFavourite({title, imageUrl, price});
    setHeart(!heart);
  }

  return (
    <div className={styles.card}>
        <img 
          onClick={() => {onClickFavourite()}} 
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
            {/* { like == 0 ? <img src='/assets/plus.svg' /> : <img src='/assets/check.svg' />} */}
            <img src={`/assets/${like == 0 ? 'plus' : 'check'}.svg`} />
        </button>
        </div>
    </div>
  );
};

export default Card