import React, { useState } from 'react';
import styles from './RecommendationBox.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Component = ({ image, price, name }) => {
  const [isShown, setIsShown] = useState(false);
  const [isTimer, setTimer] = useState(false);

  const SetOnMouseLeave = () => {
    setIsShown(false);
    setTimeout(() => { setTimer(false) }, 700);
  };

  const SetOnMouseEnter = () => {
    setIsShown(true);
    setTimer(true);
  };

  return (
    <div className={styles.root}
      onMouseEnter={() => SetOnMouseEnter()}
      onMouseLeave={() => SetOnMouseLeave()}
    >
      <div className={styles.imageWrapper}>
        <img alt='' src={image}></img>
      </div>
      {
        isShown === false && isTimer === false ?
          <div className={styles.textWrapper}>
            <h3>{name}</h3>
            <h5>From {price}$</h5>
          </div> :
          <div className={styles.textWrapper}>
            <div><Link to='/details'>View Details</Link></div>
          </div>
      }
    </div>
  );
};

Component.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
};

export {
  Component as RecommendationBox,
  Component as RecommendationBoxComponent,
};
