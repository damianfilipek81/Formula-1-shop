import { API_URL } from '../config';

import Axios from 'axios';

/* selectors */
export const getAll = ({ products }) => products.data;
/* action name creator */
const reducerName = 'products';
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
export const fetchProducts = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${API_URL}/products`)
      .then(res => {
        dispatch(fetchSucceed(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_SUCCEED: {
      return {
        data: [...action.payload],
        loading: {
          active: false,
          error: false,
        },
      };
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