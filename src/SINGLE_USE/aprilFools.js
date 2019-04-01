import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/section/section';

import { setPage } from '../virtualPage';
import styles from './aprilFools.cssm';


class AprilFools extends Component {

	constructor(props) {
		super(props);
    setPage('/aprilFools', 'April Fools 2019');
	}

  render() {
    return (
      <div className={styles.container}><Section>
				<img src={require('../media/AprilFools.png')} className={styles.image}/>
				<h1 style={{color: '#DB162F', fontWeight: 800}}>APRIL FOOLS!</h1>
				<p>
        Heritage of Pride hasn’t released the lineup yet, and though we hope to
        get a good spot, marching at all is a privilege and a pleasure, no
        matter what time/position we get. We’re excited to do it with you!
				</p>
				<p>
        <strong>BUT…</strong>we will need your help for the march and all our
        pride plans to go without a hitch. Sign up here to help us plan, or
        just let us know you’re in for the march (last Sunday in June, June
        30th).
				</p>
        <p>
          <a target="_blank" href="https://forms.gle/NvduJfGcNgABeids8">
            Pride Marching & Volunteer Sign-Up
          </a>
				</p>
			</Section></div>
    );
  }
}
export default AprilFools;
