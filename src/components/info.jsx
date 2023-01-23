import React from 'react';
import AppContext from '../context';

const Info = ({image, text, title, favoritePage=false }) => {
  const { setCartOpened } = React.useContext(AppContext);

  const onBtn = () => {
    setCartOpened(false);
    if (favoritePage) window.location.href = 'http://localhost:3000/';
  }

  return (
    <div className="empty_field">
      <img src={`/assets/${image}.jpg`} />
      <h2>{title}</h2>
      <p>{text}</p>
      <button className='orderBtn' onClick={() => {onBtn()} }>Get Back</button>
    </div>
  )
}

export default Info;
