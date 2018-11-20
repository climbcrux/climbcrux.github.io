import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './button.cssm';


const Button = ({name, children, variant, className, onClick}) => {
  return (
    <div className={classNames(className, styles.button, styles[variant])}
         onClick={() => onClick(name)}>
      {children}
    </div>
  );
};
export default Button;
