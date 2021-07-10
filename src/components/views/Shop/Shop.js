import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts, getAll } from '../../../redux/productsRedux';
import styles from './Shop.module.scss';
import { ShopBox } from '../../features/ShopBox/ShopBox';
import { Container as ContainerWidth } from '@material-ui/core';

const Component = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.banner}>
        <h1>DRIVE to SURVIVE</h1>
      </div>
      <h2 className={styles.subTitle}>- SHOP WITH US -</h2>
      <ContainerWidth>
        <div className={styles.products}>
          {products.map(data => {
            return data.customizable === false ? <ShopBox {...data} key={data._id} /> :
              Object.keys(data.images).map((color, index) => {
                data.image = data.images[color][0];
                data.color = color;
                return <ShopBox key={index} {...data} />
              }
              )
          })}
        </div>
      </ContainerWidth>
    </div>
  );
};
Component.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Shop,
  Component as ShopComponent,
};
