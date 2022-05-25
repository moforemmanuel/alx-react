import React from 'react';
import './Notifications.css';
import closeIcon from './xmark-solid.svg';
import { getLatestNotification } from './utils';

export default function Notifications() {
  return (
    <>
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
      <li className='text-navy'>New course available</li>
      <li className='text-red'>New resume available</li>
      <li className='text-red' dangerouslySetInnerHTML={{__html: getLatestNotification() }}/>
      </ul>
    </div>

    <button className='closeBtn' aria-label='Close' onClick={() => console.log('Close button has been clicked')}>
      <img src={closeIcon} alt='x' width='10'/>
      
    </button>
    </>
  )
}