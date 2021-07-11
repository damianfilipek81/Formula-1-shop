import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CartBox.module.scss';
import { PUBLIC_URL } from '../../../config';
import { QuantityButton } from '../../common/QuantityButton/QuantityButton';

const Component = ({ data }) => {
  const { image, price, name, quantity, customizable, id, color } = data;
  const [quantityState, setQuantityState] = useState(quantity);

  return (
    <div className={styles.root}>
      <div className={styles.leftWrapper}>
        <div className={styles.imageWrapper}>
          {customizable ? <img src={`${PUBLIC_URL}${image}`} alt=''></img> : <img src={image} alt=''></img>}
        </div>
      </div>
      <div className={styles.rightWrapper}>
        {customizable ? <h4>{`${color} ${name}`}</h4> : <h4>{name}</h4>}
        <h4>${price}</h4>
        <QuantityButton quantity={quantityState} setQuantity={setQuantityState} cart={true} id={id} />
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
