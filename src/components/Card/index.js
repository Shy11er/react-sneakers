import styles from './Card.module.scss';

console.log(styles);

const Card = (props) => {
  return (
    <div className={styles.card}>
        <img className={styles.unliked} src='/assets/unliked.svg' width={20} height={20} />
        <img width={130} height={110} src={`/assets/${props.imageUrl}.jpg`} />
        <h5>{props.title}</h5>
        <div className={styles.card_info}>
        <div className={styles.card_info_left}>
            <p>Price:</p>
            <b>{props.price} $</b>       
        </div>
        <button>
            <img src='/assets/plus.svg' />
        </button>
        </div>
    </div>
  );
};

export default Card