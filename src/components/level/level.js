import React from 'react';
import classNames from 'classnames';
import { LEVELS } from '../../membership_levels';
import styles from './level.cssm';



const MemberLevel = ({level, onClick, sale=false}) => {
  var levelContent = LEVELS[level];

  function click() {
    onClick(
      level,
      levelContent[sale ? 'price' : 'sale'],
    );
  }

  const classes = classNames(
      styles.container,
      styles[levelContent.className]
  );

  return (
    <div className={classes} onClick={click}>
      <div className={styles.name}>{levelContent.name}</div>
      <div className={styles.perks}>{levelContent.perks}</div>
      <div className={classNames(styles.price, sale && styles.sale)}>
        {sale ? levelContent.sale : levelContent.price}
      </div>
    </div>
  );
};
export default MemberLevel;
