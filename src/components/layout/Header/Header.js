import React from 'react';
// import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { NavButton } from '../../common/NavButton/NavButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Component = () => (
  <div className={styles.root}>
    <Container maxWidth='md' className={styles.container}>
      <NavButton name={'Home'} link='/' />
      <NavButton name={'About'} link='/about' />
      <NavButton name={'Shop'} link='/shop' />
      <NavButton name={'TV'} link='/tv' />
      <NavLink to='/auth/google' className={styles.btn}><AccountCircleIcon />Log In</NavLink>
      <NavLink to='/cart' className={styles.btn}><ShoppingCartIcon /></NavLink>
    </Container>

  </div>
);

Component.propTypes = {
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
