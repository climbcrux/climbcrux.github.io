import React from 'react';
import { LEADERSHIP } from '../../CONFIG_FILES/leaders';
import styles from './photo-grid.cssm';

const PhotoGrid = ({}) => {
  return (
    <div className={styles.container}>
      {LEADERSHIP.map((item, i) => {
        return (
          <div className={styles.leader} key={i}>
            <div className={styles.name}>
              {item.name}
            </div>
            <img src={item.img} />
            <div className={styles.info}>
              <div>{item.position}</div>
              <div>{item.pronouns}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default PhotoGrid;
