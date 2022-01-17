import React from 'react';
import { storiesOf } from '@storybook/react';

import Gallery from './gallery';
import styles from './gallery.cssm';

const IMAGES = [
  require('../../media/homepage/dumbo_2017_2.jpg'),
  require('../../media/homepage/pride_2016.jpg'),
];

const GalleryWrapper = (props) => {
  return (
    <div className={styles.wrapper}>
      <Gallery {...props} />
    </div>
  );
};

storiesOf('Image Gallery', module)
.add('Empty Gallery', () => (
  <GalleryWrapper />
))
.add('Single Image', () => (
  <GalleryWrapper images={[IMAGES[0]]} />
))
.add('Multiple Images', () => (
  <GalleryWrapper images={IMAGES} />
));
