import React from 'react';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';
import styles from './modal.cssm';


const Modal = ({visible, size, onClose, children}) => {
  return (
    <div className={classNames(styles.container, !visible && styles.closed)}>
      <div className={styles[size]}>
        { onClose && 
            <div className={styles.close} onClick={onClose}>
              <SVG src={require('../../media/x-close.svg')} />
            </div>
        }
        {children}
      </div>
    </div>
  );
}
export default Modal;
