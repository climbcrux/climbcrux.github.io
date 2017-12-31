import React from 'react';
import classNames from 'classnames';

import Pin from '../pin/pin';
import styles from './event.cssm';


const Event = ({image, name, gym, description, time, price, freq}) => {
  return (
    <div className={classNames(
        styles.container,
        styles[freq],
      )}>
      <div className={styles.header}>
        <img src={image} />
        <div>{name}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.location}>
          <Pin /><a href={gym.link} target="_blank">{gym.name}</a>
        </div>
        {description}
      </div>
      <div className={styles.footer}>
        { time && <div className={styles.time}>{time}</div>}
        { price && <div className={styles.price}>{price}</div>}
      </div>
    </div>
  );
};
export default Event;
