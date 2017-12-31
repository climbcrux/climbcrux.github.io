import React from 'react';
import styles from './perks.cssm';

const Perk = ({label, desc, img}) => {
    return (
        <div className={styles.perk}>
            <div className={styles.image}>
                <img src={img} />
            </div>
            <div className={styles.label}>{label}</div>
            <div className={styles.desc}>{desc}</div>
        </div>
    );
};
export default Perk;
