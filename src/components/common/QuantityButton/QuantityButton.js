import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './QuantityButton.module.scss';

const Component = ({ quantity, setQuantity }) => {
  return (
    <div className={styles.root}>
      <span className={clsx(styles.btn, quantity === 1 && styles.btnDisable)} onClick={() => quantity > 1 ? setQuantity(quantity -= 1) : null}>-</span>
      <span>{quantity}</span>
      <span className={styles.btn} onClick={() => setQuantity(quantity += 1)}>+</span>
    </div>
  );
};
Component.propTypes = {
  quantity: PropTypes.number,
  setQuantity: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as QuantityButton,
  // Container as QuantityButton,
  Component as QuantityButtonComponent,
};
