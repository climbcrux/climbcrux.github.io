import React from 'react';
import styles from './photo-grid.cssm';

const PhotoGrid = ({photos}) => {
  return (
    <div className={styles.container}>
      {photos.map((item, i) => {
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
