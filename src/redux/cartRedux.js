import { API_URL } from '../config';
import Axios from 'axios';

/* selectors */
export const getCartData = ({ cart }) => cart;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const CHANGE_QUANTITY = createActionName('CHANGE_QUANTITY');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addToCart = payload => ({ payload, type: ADD_TO_CART });
export const changeQuantity = payload => ({ payload, type: CHANGE_QUANTITY });
export const removeFromCart = payload => ({ payload, type: REMOVE_FROM_CART });

/* thunk creators */
// export const fetchCart = () => {
//   return (dispatch, getState) => {
//     if (getState().products.data.length === 0) {
//       dispatch(fetchStarted());

//       Axios
//         .get(`${API_URL}/cart`)
//         .then(res => {
//           dispatch(fetchSucceed(res.data));
//         })
//         .catch(err => {
//           dispatch(fetchError(err.message || true));
//         });
//     }
//   };
// };


/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case CHANGE_QUANTITY: {
      return [...statePart.map(data => {
        if (data.id === action.payload.id) {
          data.quantity = action.payload.quantity;
          return data;
        } else {
          return data;
        }
      })]
    }
    case ADD_TO_CART: {
      if (statePart.length > 0) {
        let x = false;

        statePart.map(data => {
          if (data.color === action.payload.color && data.name === action.payload.name) {
            x = true;
            data.quantity += action.payload.quantity;
            return data;
          }
        })
        return x ? statePart : [...statePart, action.payload];
      } else {
        return [action.payload]
      }
    }
    case REMOVE_FROM_CART: {
      return [...statePart.filter(data => data.id !== action.payload)]
    }
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};