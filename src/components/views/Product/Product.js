import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchOneProduct, getOneProduct } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';
import { addModal } from '../../../redux/modalRedux';
import styles from './Product.module.scss';
import clsx from 'clsx';

import { Container as WidthContainer } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';

const Component = ({ product, fetchOneProduct, addToCart, addModal }) => {
  useEffect(() => {
    fetchOneProduct();
  }, [fetchOneProduct]);

  const { image, price, name } = product;
  const [productDropdown, setProductDropdown] = React.useState(false);
  const [policyDropdown, setPolicyDropdown] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState('Blue');

  const handleProductDropdownClick = () => {
    setProductDropdown(!productDropdown);
  };

  const handlePolicyDropdownClick = () => {
    setPolicyDropdown(!policyDropdown);
  };

  const handleAddToCart = () => {
    const output = {
      image,
      price,
      name,
      quantity,
      color
    };

    addModal();
    addToCart(output);
  }

  const colors = ['Blue', 'Black', 'Red', 'White'];

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
          <h3>${price}</h3>
          <TextField
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            inputProps={{
              min: 1
            }}
            InputLabelProps={{
              shrink: true,
            }}
            className={styles.quantity}
          />
          <div className={styles.colors}>
            {colors.map(data =>
              <span className={clsx(styles.color, styles[data], { [styles.checked]: color === data })} key={data} onClick={() => setColor(data)}></span>
            )}
          </div>
          <Button className={styles.btn} onClick={() => handleAddToCart()}>Add to Cart</Button>
          <Button className={styles.btn}>Buy Now</Button>
          <div onClick={handleProductDropdownClick} className={styles.dropdownBtn}>
            <h4>PRODUCT INFO</h4>
            {productDropdown ? <h4>-</h4> : <h4>+</h4>}
          </div>
          <Collapse in={productDropdown} timeout="auto" unmountOnExit>
            <p>I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.</p>
          </Collapse>
          <div onClick={handlePolicyDropdownClick} className={styles.dropdownBtn}>
            <h4>RETURN AND REFUND POLICY</h4>
            {policyDropdown ? <h4>-</h4> : <h4>+</h4>}
          </div>
          <Collapse in={policyDropdown} timeout="auto" unmountOnExit>
            <p>I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>
          </Collapse>
        </div>
      </div>
    </WidthContainer>
  );
};
Component.propTypes = {
  fetchOneProduct: PropTypes.func,
  product: PropTypes.object,
  cartData: PropTypes.array,
  addToCart: PropTypes.func,
  addModal: PropTypes.func,
  removeModal: PropTypes.func,
};

const mapStateToProps = state => ({
  product: getOneProduct(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchOneProduct: () => dispatch(fetchOneProduct(props.match.params.id)),
  addToCart: arg => dispatch(addToCart(arg)),
  addModal: () => dispatch(addModal()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Product,
  Component as ProductComponent,
};
