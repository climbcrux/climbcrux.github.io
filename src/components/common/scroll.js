import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';


export class ScrollControl extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    
    this.changeRoute = this.changeRoute.bind(this);
    this.unlink = this.props.history.listen(this.changeRoute);
  }

  componentDidMount() {
    this.scrollToHash(this.props.history.location);
  }

  changeRoute(location, action) {
    if (this._sameLocation(location)) {
      return null
    } else if (this._pageChanged(location)) {
      this.scrollToTop();
    } else if (this._removedHash(location)) {
      this.scrollToTop();
    }

  }

  componentDidUpdate() {
    this.scrollToHash(this.props.history.location);
  }

  _sameLocation(location) {
    return this.props.location.pathname == location.pathname &&
           this.props.location.hash == location.path;
  }

  _pageChanged(location) {
    return this.props.location.pathname != location.pathname;
  }

  _removedHash(location) {
    return this.props.location.hash != "" && location.hash == "";
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  scrollToHash(loc) {
    if (loc.hash != "") {
      console.log("Scroll To Hash", loc.hash);
      this.scrollToElem(loc.hash.slice(1));
    }
  }

  scrollToElem(name) {
    var elem = document.querySelector(`[name=${name}]`);
    if (elem) {
      elem.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollControl);
