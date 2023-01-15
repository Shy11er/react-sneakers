const Card = () => {
  return (
    <div className="card">
        <img className='unliked' src='/assets/unliked.svg' width={20} height={20} />
        <img width={140} height={110} src='/assets/nike_blaze_mid.jpg' />
        <h5>Men`s sneakers Nike Blazer Mid Suede</h5>
        <div className="card_info">
        <div className="card_info_left">
            <p>Price:</p>
            <b>1,099 $</b>       
        </div>
        <button>
            <img src='/assets/plus.svg' />
        </button>
        </div>
    </div>
  );
};

export default Card