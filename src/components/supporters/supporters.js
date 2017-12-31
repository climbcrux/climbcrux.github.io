import React from 'react';

import { SUPPORTERS } from './supporters-list';
import styles from './supporters.cssm';


const SupportersList = ({className}) => {
  return (
    <div className={styles.container}>
      { SUPPORTERS.map((person, i) => (
        <div key={i} className={styles.name}>{person}</div>
      ))}
    </div>
  );
};
export default SupportersList;
