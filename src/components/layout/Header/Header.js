import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addModal } from '../../../redux/modalRedux.js';

import { Container as ContainerWidth} from '@material-ui/core';
import { NavButton } from '../../common/NavButton/NavButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

const Component = ({ addModal }) => (
  <div className={styles.root}>
    <ContainerWidth maxWidth='md' className={styles.container}>
      <NavButton name={'Home'} link='/' />
      <NavButton name={'About'} link='/about' />
      <NavButton name={'Shop'} link='/shop' />
      <NavButton name={'TV'} link='/tv' />
      <NavLink to='/auth/google' className={styles.btn}><AccountCircleIcon />Log In</NavLink>
      <a onClick={addModal} className={styles.btn}><ShoppingCartIcon /></a>
    </ContainerWidth>

  </div>
);

Component.propTypes = {
  addModal: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  addModal: () => dispatch(addModal()),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  Container as Header,
  Component as HeaderComponent,
};
