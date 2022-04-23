import actions from '../constants';

const INITIAL_STATE = {
  routineLibrary: [],
};

const library = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SET_EXERCISE_LIBRARY:
      return {...state, routineLibrary: action.payload};
    default:
      return state;
  }
};

export default library;
