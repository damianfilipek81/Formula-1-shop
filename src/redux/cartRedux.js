import { API_URL } from '../config';
import Axios from 'axios';

/* selectors */
export const getAll = ({ cart }) => cart;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const FETCH_SUCCEED = createActionName('FETCH_SUCCEED');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const fetchSucceed = payload => ({ payload, type: FETCH_SUCCEED });

/* thunk creators */
export const fetchCart = () => {
  return (dispatch, getState) => {
    if (getState().products.data.length === 0) {
      dispatch(fetchStarted());

      Axios
        .get(`${API_URL}/cart`)
        .then(res => {
          dispatch(fetchSucceed(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};


/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_SUCCEED: {
      return [
        ...statePart,
        action.payload
      ];
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