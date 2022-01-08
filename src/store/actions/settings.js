import actions from '../constants';

const toggleSound = (data) => {
  return async (dispatch) => {
    dispatch({
      type: actions.SET_SOUND,
      payload: data,
    });
  };
};

const setPauseTime = (data) => {
  return async (dispatch) => {
    dispatch({
      type: actions.SET_PAUSE_TIME,
      payload: data,
    });
  };
};

export default {
  toggleSound,
  setPauseTime
};
