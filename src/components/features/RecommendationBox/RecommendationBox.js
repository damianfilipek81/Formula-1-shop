import React, { useState } from 'react';
import styles from './RecommendationBox.module.scss';
import { Link } from 'react-router-dom';

const Component = () => {
  const [isShown, setIsShown] = useState(false);
  const [isTimer, setTimer] = useState(false);
  
  const SetOnMouseLeave = () => {
    setIsShown(false);
    setTimeout(() => {setTimer(false)}, 700);
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
        <img alt='' src='https://cdn.shopify.com/s/files/1/1451/0982/products/324901019100_PP_1_FORMULA1_A_011_1024x1024-compressed.jpg?v=1594232128'></img>
      </div>
      {
        isShown === false && isTimer === false ?
          <div className={styles.textWrapper}>
            <h3>Mugs</h3>
            <h5>From 5$</h5>
          </div> :
          <div className={styles.textWrapper}>
            <div><Link to='/details'>View Details</Link></div>
          </div>
      }
    </div>
  );
};
export {
  Component as RecommendationBox,
  Component as RecommendationBoxComponent,
};
