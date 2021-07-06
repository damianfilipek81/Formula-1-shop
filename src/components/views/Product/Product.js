import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchOneProduct, getOneProduct } from '../../../redux/productsRedux';

import styles from './Product.module.scss';

const Component = ({ getOneProduct, fetchOneProduct }) => {
  useEffect(() => {
    fetchOneProduct();
  }, [fetchOneProduct]);

  console.log(getOneProduct)
  return (
    <div className={styles.root}>

    </div>
  );
};
Component.propTypes = {
  fetchOneProduct: PropTypes.func,
  getOneProduct: PropTypes.object,
};

const mapStateToProps = state => ({
  getOneProduct: getOneProduct(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOneProduct: () => dispatch(fetchOneProduct(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
