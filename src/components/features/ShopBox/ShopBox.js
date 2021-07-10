import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShopBox.module.scss';
import {PUBLIC_URL} from '../../../config';

const Component = ({ image, name, price, customizable }) => (
  <div className={styles.root}>
    <div className={styles.imageWrapper}>
      {customizable ? <img src={`${PUBLIC_URL}${image}`} alt=''></img>:<img src={image} alt=''></img>}
    </div>
    <h4>{name}</h4>
    <h4>${price}</h4>
  </div>
);

Component.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  customizable: PropTypes.bool,
};

export {
  Component as ShopBox,
  Component as ShopBoxComponent,
};
