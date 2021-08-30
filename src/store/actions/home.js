import actions from '../constants';

//this should go into redux actions
const getFeedData = (check) => {
  return async (dispatch) => {
    dispatch({
      type: actions.GET_FEED_DATA,
      payload: check,
    });
  };
};

export default {
  getFeedData,
};
