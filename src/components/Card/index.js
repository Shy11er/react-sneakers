import {useState} from 'react';
import styles from './Card.module.scss';

console.log(styles);

const Card = (props) => {
  const [like, setLike] = useState(false);
  const [heart, setHeart] = useState(false);

  return (
    <div className={styles.card}>
        <img 
          onClick={() => {heart == 0 ? setHeart(true) : setHeart(false)}} 
          className={styles.unliked} 
          src={`/assets/${ heart == false ? 'unliked' : 'liked'}.svg`} 
          width={20} 
          height={20} 
        />
        <img width={130} height={110} src={`/assets/${props.imageUrl}.jpg`} />
        <h5>{props.title}</h5>
        <div className={styles.card_info}>
        <div className={styles.card_info_left}>
            <p>Price:</p>
            <b>{props.price} $</b>       
        </div>
        <button onClick={() => {like == 0 ? setLike(true) : setLike(false)}}>
            { like == 0 ? <img src='/assets/plus.svg' /> : <img src='/assets/check.svg' />}
        </button>
        </div>
    </div>
  );
};

export default Card