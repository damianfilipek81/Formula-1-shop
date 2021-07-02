import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = ({ className, children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className={styles.root}>
      <Slider {...settings} className={styles.slider}>
        <div className={styles.imageWrapper}>
          <img alt='' src='https://www.formula1.com/content/dam/fom-website/manual/races/Singapore/Start%202018%20Singapore.jpg.transform/9col/image.jpg'></img>
        </div>
        <div className={styles.imageWrapper}>
          <img alt='' src='https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Racehub%20header%20images%2016x9/Vietnam.jpg.transform/9col/image.jpg'></img>
        </div>
      </Slider>
      <div className={styles.sliderCenterContent}>
        <div className={styles.wrapper}>
          <div className={styles.topContent}>
            <h1>Formula 1</h1>
          </div>
          <div className={styles.bottomContent}>
            <div></div>
            <div></div>
            <div><Link to='/shop'>START SHOPPING</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
