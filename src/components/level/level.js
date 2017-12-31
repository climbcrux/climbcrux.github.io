import React from 'react';
import { LEVELS } from '../../membership_levels';
import styles from './level.cssm';



const MemberLevel = ({level, onClick, sale=false}) => {
  var levelContent = LEVELS[level];

  return (
    <div className={styles.container} onClick={() => onClick(level)}>
      <div className={styles.name}>{levelContent.name}</div>
      <div className={styles.perks}>{levelContent.perks}</div>
      <div className={styles.price}>{sale ? levelContent.sale : levelContent.price}</div>
    </div>
  );
};
export default MemberLevel;
