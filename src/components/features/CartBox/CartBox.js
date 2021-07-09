import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartBox.module.scss';
import { PUBLIC_URL } from '../../../config';

const Component = ({ data }) => {
  const { image, price, name, quantity } = data;

  return (
    <div className={styles.root}>
      <div className={styles.leftWrapper}>
        <div className={styles.imageWrapper}>
          <img src={`${PUBLIC_URL}${image}`} alt=''></img>
        </div>
      </div>
      <div className={styles.rightWrapper}>
        <h4>{name}</h4>
        <h4>${price}</h4>
      </div>
    </div>
  );
};
Component.propTypes = {
  data: PropTypes.object,
};

export {
  Component as CartBox,
  Component as CartBoxComponent,
};
