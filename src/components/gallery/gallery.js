import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactCSSTransitionReplace from 'react-css-transition-replace';

require('./animation.css');
import styles from './gallery.cssm';


class Gallery extends Component {
  
  static propTypes = {
    images: PropTypes.array,
    switchInterval: PropTypes.number,
    shiftDuration: PropTypes.number,
  };

  static defaultProps = {
    switchInterval: 120000,
    shiftDuration: 1000,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeImage: undefined,
      imageIdx: undefined,
    };

    this.overridePhoto = this.overridePhoto.bind(this);
  }

  componentWillMount() {
    this.loadPhoto();
    this.intervalId = setInterval(() => (
      this.loadPhoto()
    ), this.props.switchInterval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  loadPhoto() {
    const { images } = this.props;
    const { imageIdx, activeImage } = this.state;

    if (images && !activeImage) {
      this.setState({
        activeImage: images[0],
        imageIdx: 0
      });
    } else if (images) {
      let newIdx = (imageIdx + 1) % images.length
      this.setState({
        activeImage: images[newIdx],
        imageIdx: newIdx,
      });
    }
  }

  overridePhoto(idx) {
    this.setState({
      imageIdx: idx,
      activeImage: this.props.images[idx],
    });
  }

  renderProgressTracker() {
    const { images } = this.props;

    if (!images || images.length <= 1) {
      return <div />
    } else {
      return (
        <div className={styles.progressTracker}>
          {images.map((img, i) => (
            <div
              key={i}
              className={classNames(
                styles.bubble,
                img === this.state.activeImage && styles.active,
              )}
              onClick={() => this.overridePhoto(i)}
            />
          ))}
        </div>
      );
    }
  }

  render() {
    const { images, shiftDuration } = this.props;
    const { imageIdx, activeImage } = this.state;

    return (
      <div className={styles.container}>
        <ReactCSSTransitionReplace
          transitionName="carousel-swap"
          transitionEnterTimeout={shiftDuration}
          transitionLeaveTimeout={shiftDuration}
        >
          { activeImage &&
            <img key={imageIdx} src={activeImage} />
          }
        </ReactCSSTransitionReplace>

        { this.renderProgressTracker() }
      </div>
    );
  }
}

export default Gallery;
