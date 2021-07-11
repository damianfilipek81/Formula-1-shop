import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CartBox.module.scss';
import { PUBLIC_URL } from '../../../config';
import { QuantityButton } from '../../common/QuantityButton/QuantityButton';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../redux/cartRedux.js';

const Component = ({ data, removeFromCart }) => {
  const { image, price, name, quantity, customizable, id, color } = data;
  const [quantityState, setQuantityState] = useState(quantity);

  return (
    <div className={styles.root}>
      <span className={styles.closebtn} onClick={()=> removeFromCart(id)}>X</span>
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
  removeFromCart: PropTypes.func,
};

const mapDispatchToPropst = dispatch => ({
  removeFromCart: arg => dispatch(removeFromCart(arg))
});

const Container = connect(null, mapDispatchToPropst)(Component);
export {
  Container as CartBox,
  Component as CartBoxComponent,
};
