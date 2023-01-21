import React from 'react';
import AppContext from '../context';

const Info = ({image, text, title }) => {
  const [isOrdered, setIsOrdered] = React.useState(false);
  const { setCartOpened } = React.useContext(AppContext);


  return (
    <div className="empty_field">
      <img src={`/assets/${image}.jpg`}/>
      <h2>{title}</h2>
      <p>{text}</p>
      <button className='orderBtn' onClick={() => setCartOpened(false)}>Get Back</button>
    </div>
  )
}

export default Info;
