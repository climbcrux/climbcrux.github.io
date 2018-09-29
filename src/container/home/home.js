import React, { Component } from 'react';

import Gallery from '../../components/gallery/gallery';
import { HOMEPAGE_IMAGES } from '../../CONFIG_FILES/photoGallery';
import { setPage } from '../../virtualPage';

import styles from './home.cssm';


class Home extends Component {
  constructor(props) {
    super(props);

    setPage('/', 'Home');
  }
  
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
        <div className={styles.layer} >
          <div className={styles.quote}>
            Empowering members of the LGBTQ community to participate in rock
            climbing and outdoor recreation in New York.
          </div>
          <Gallery className={styles.gallery} images={HOMEPAGE_IMAGES} />
        </div>
      </div>
    );
 }

};

export default Home;
