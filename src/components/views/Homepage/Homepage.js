import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import styles from './Homepage.module.scss';
import { RecommendationBox } from '../../features/RecommendationBox/RecommendationBox';

const Component = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  
  return (
    <div className={styles.root}>
      <div className={styles.sliderWrapper}>
        <Slider {...settings}>
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
              <h1>DRIVE to SURVIVE</h1>
            </div>
            <div className={styles.bottomContent}>
              <div><p><span>"Really, you should always discuss the defeats because you can learn much more from failure than from success."</span> <br />- Niki Lauda</p></div>
              <div></div>
              <div><Link to='/shop'>START SHOPPING</Link></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.recommendationsWrapper}>
        <h1>Our recommendations</h1>
        <RecommendationBox />
      </div>
    </div>
  );
};
Component.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,
};
