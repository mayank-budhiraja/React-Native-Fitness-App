import actions from '../constants';

const routineLibrary = (routines) => {
  return async (dispatch) => {

    const data = await routines.map((x) => {
      return Object.values(x).flat();
    });

    dispatch({
      type: actions.SET_EXERCISE_LIBRARY,
      payload: data.flat(),
    });
    
  };
};

export default {
  routineLibrary,
};
