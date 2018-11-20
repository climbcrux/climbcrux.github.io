import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './footer.cssm';


class Footer extends Component {
  static propTypes = {
  };

  static defaultProps = {
    tabs: [],
  };

  _restructureTabs(tabs) {
    var ls = tabs.slice(0, 1);
    ls.push([tabs.slice(1,3)]);
    ls.push(tabs.slice(3,4));
    return ls;
  }

  render() {
    const { tabs } = this.props;
    var ls = this._restructureTabs(tabs);

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          {ls.map((tab, i) => this.addPageStructure(tab, i))}
          {this.addSocial()}

          {this.CRUXBlurb()}
        </div>
      </div>
    );
  }

  addPageStructure(tab, i) {
    if (tab.length === undefined) {
      return (
        <ul key={tab.id} className={styles.menu}>
          <li key={tab.id}
            className={styles.title}
            onClick={() => this.onClick(tab.path)}>
            {tab.label}
          </li>
          {tab.sections &&
           tab.sections.map(section => this.addSection(tab, section))}
        </ul>
      );
    } else {
      return (
        <div key={`list${i}`} className={styles.menu}>
          {tab.map((t) => this.addPageStructure(t))}
        </div>
      );
    }
  }

  CRUXBlurb() {
    return (
      <div>
        <strong>CRUX Climbing is a 501(c)(3)</strong>
        <span>EIN: 27-3868534</span>

        <a href="https://www.guidestar.org/profile/27-3868534"
           target="_blank">
           <img src="https://widgets.guidestar.org/gximage2?o=9179921&l=v4" />
        </a>
      </div>
    )
  }

  addSection(tab, section) {
    return (
      <li key={section.id}
        onClick={() => this.onClick({
          pathname: section.path.pathname || tab.path.pathname,
          hash: section.path.hash
        })}>
        {section.label}
      </li>
    );
  }

  addSocial() {
    const { social } = this.props;

    return (
      <ul key="social" className={styles.menu}>
        <li key="social" className={styles.title}>Social</li>
        {social.map((platform, i) => (
          <li key={i}>
            <a href={platform.url}>{platform.label}</a>
          </li>
        ))}
      </ul>
    )
  }


  onClick = (tid) => {
    if(this.props.onChange) {
      this.props.onChange(tid);
    }
  }
};

export default Footer;
