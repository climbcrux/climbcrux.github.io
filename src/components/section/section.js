import React from 'react';
import classNames from 'classnames';
import { Element } from 'react-scroll';

import styles from './section.cssm';


const Section = ({name, children, className}) => {
  return (
    <Element name={name} className={classNames(styles.container, className)}>
      <div className={styles.inner}>
        {children}
      </div>
    </Element>
  );
};

export default Section;
