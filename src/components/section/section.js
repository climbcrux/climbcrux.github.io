import React from 'react';
import classNames from 'classnames';
import { Element } from 'react-scroll';

import styles from './section.cssm';


const Section = ({name, children, className, style}) => {
  return (
    <Element name={name} className={classNames(
      styles.container, className, "section")}>
      <div className={styles.inner} style={style}>
        {children}
      </div>
    </Element>
  );
};

export default Section;
