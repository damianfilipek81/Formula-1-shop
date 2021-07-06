/* selectors */
export const getModal = ({ modals }) => modals.loadingModal;

/* action name creator */
const reducerName = 'modal';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_LOADING_MODAL = createActionName('CHANGE_LOADING_MODAL');

/* action creators */
export const changeLoadingModal = payload => ({ payload, type: CHANGE_LOADING_MODAL });

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case CHANGE_LOADING_MODAL: {
      return {
        loadingModal: true,
      };
    }
    default:
      return statePart;
  }
};