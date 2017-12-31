import React from 'react';
import { storiesOf } from '@storybook/react';
import { Parallax } from './parallax';

import styles from './parallax.story.cssm';


storiesOf('Parallax', module)
.add('Test', () => (
  <Parallax pages={1}>
    <Parallax.Layer className={styles.bgImage1}>
      <div>Some Text</div>
    </Parallax.Layer>
    <Parallax.Layer className={styles.bgColor}>
      <div>End Text</div>
    </Parallax.Layer>
  </Parallax>
));
