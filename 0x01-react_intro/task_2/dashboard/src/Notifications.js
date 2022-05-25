import React from 'react';
import './Notifications.css';
import closeIcon from './xmark-solid.svg';

export default function Notifications() {
  return (
    <>
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
    </div>

    <button className='closeBtn' aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
      <img src={closeIcon} alt='x' width='10'/>
      
    </button>
    </>
  )
}