import React from 'react';
// import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { NavButton } from '../../common/NavButton/NavButton';

import styles from './Header.module.scss';

const Component = () => (
  <div className={styles.root}>
    <Container maxWidth='md' className={styles.container}>
      <NavButton name={'Home'} link='/' />
      <NavButton name={'About'} link='/about' />
      <NavButton name={'Shop'} link='/shop' />
      <NavButton name={'TV'} link='/tv' />

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
