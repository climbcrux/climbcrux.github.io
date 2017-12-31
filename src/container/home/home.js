import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';

import Gallery from '../../components/gallery/gallery';

import styles from './home.cssm';

const IMAGES = [
  require('../../media/homepage/pride16.jpg'),
  require('../../media/homepage/anchorbuilding.jpg'),
  require('../../media/homepage/pride17.jpg'),
  require('../../media/homepage/dumbobridge.jpg'),
  require('../../media/homepage/redrock.jpg'),
  require('../../media/homepage/dumbo.jpg'),
  require('../../media/homepage/hc.jpg'),
];

class Home extends Component {

  render() {
		const style = {
			fontFamily: 'Menlo-Regular, Menlo, monospace',
			fontSize: 24,
			fontWeight: 600,
			lineHeight: '10px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}

    return (
      <div className={styles.container}>
        <Parallax pages={2} ref="parallax">
          <Parallax.Layer offset={0} speed={0}>
            <Gallery images={IMAGES} />
          </Parallax.Layer >
          <Parallax.Layer offset={1} speed={0} />

          <Parallax.Layer offset={0} speed={0.5} style={style}>
            Start Text
          </Parallax.Layer>
          <Parallax.Layer offset={1} speed={0.5} style={style}>
            End Text
          </Parallax.Layer>
        </Parallax>
      </div>
    );
 }

};

export default Home;
