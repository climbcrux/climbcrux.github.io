import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './button.cssm';


const Button = ({name, children, className, onClick}) => {
  return (
    <div className={classNames(className, styles.button)}
         onClick={() => onClick(name)}>
      {children}
    </div>
  );
};
export default Button;
