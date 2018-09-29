import React from 'react';
import styles from './ipm.cssm';


const IPM = ({message}) => {
  return (
    <div className={styles.container}>
      {message}
    </div>
  );
}
export default IPM;
