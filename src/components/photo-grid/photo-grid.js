import React from 'react';
import { LEADERSHIP } from '../../leaders';
import styles from './photo-grid.cssm';

const PhotoGrid = ({}) => {
  return (
    <div className={styles.container}>
      {LEADERSHIP.map((item, i) => {
        return (
          <div className={styles.leader} key={i}>
            <img src={item.img} />
            <div className={styles.hover}>
              <div>{item.name}</div>
              <div>{item.position}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PhotoGrid;
