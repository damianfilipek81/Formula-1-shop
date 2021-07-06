import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchOneProduct, getOneProduct } from '../../../redux/productsRedux';
import { Container as WidthContainer } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import styles from './Product.module.scss';

const Component = ({ product, fetchOneProduct }) => {
  useEffect(() => {
    fetchOneProduct();
  }, []);

  const { image, price, name } = product;

  return (
    <WidthContainer>
      <div className={styles.root}>
        <div className={styles.link}><Link to='/'>HOME</Link> / <span>{name}</span></div>
        <div className={styles.leftWrapper}>
          <div className={styles.imageWrapper}>
            <img src={image} alt=''></img>
          </div>
          <p>
            I'm a product description. I’m a great place to include more information about your product. Buyers like to know what they’re getting before they purchase.
          </p>
        </div>
        <div className={styles.rightWrapper}>
          <h1>{name}</h1>
          <h3>{price}</h3>
          <TextField
          label="Quantity"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
      </div>
    </WidthContainer>
  );
};
Component.propTypes = {
  fetchOneProduct: PropTypes.func,
  product: PropTypes.object,
};

const mapStateToProps = state => ({
  product: getOneProduct(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOneProduct: () => dispatch(fetchOneProduct(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
