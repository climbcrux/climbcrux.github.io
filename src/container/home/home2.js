import React, { Component } from 'react';

import Parallax from '../../components/parallax/parallax';
import AppWrap from '../../components/app-wrap/app-wrap';
import Gallery from '../../components/gallery/gallery';
import { HOMEPAGE_IMAGES } from '../../homepageGallery';

import styles from './home.cssm';

class Home extends Component {

  render() {
		const styles = {
			fontFamily: 'Menlo-Regular, Menlo, monospace',
			fontSize: 24,
			fontWeight: 600,
			lineHeight: '10px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center'
		}

    return (
      <AppWrap>
        <Parallax pages={2} ref="parallax">
          // TODO - this still needs a bit of tuning
          <Parallax.Layer offset={0} speed={0}>
            <Gallery images={IMAGES} />
          </Parallax.Layer >
          <Parallax.Layer offset={1} speed={0} />

          <Parallax.Layer offset={0} speed={0.5} style={styles}>
            Start Text
          </Parallax.Layer>
          <Parallax.Layer offset={1} speed={0.5} style={styles}>
            End Text
          </Parallax.Layer>
        </Parallax>
      </AppWrap>
    );
 }

};

export default Home;
