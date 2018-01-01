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
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
        <Parallax pages={1} ref="parallax">
          <Parallax.Layer offset={0} speed={0}>

            <div className={styles.layer}>
              <div className={styles.quote}>
                Empowered members of the LGBTQ community to participate rock
                climbing and other outdoor recreation in the New York
                metropolitan area and eastern New York.
              </div>
              <Gallery className={styles.gallery} images={IMAGES} />
            </div>

          </Parallax.Layer >
        </Parallax>
      </div>
    );
 }

};

export default Home;
