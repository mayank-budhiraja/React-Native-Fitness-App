import actions from '../constants';
import homeData from '../../assets/data/homeData';

const getFeedData = (data) => {
  return async (dispatch) => {
    dispatch({
      type: actions.GET_FEED_DATA,
      payload: data,
    });
  };
};

const setHomeData = (selectID, routineDifficulty) => {
  return async (dispatch, getState) => {
    let filterFeedData = homeData.filter(
      (item) => item.routineDifficulty == routineDifficulty,
    );
    const subDataState = getState().home.subData;
    let filterSubData = subDataState.map((element) => {
      if (element.id == selectID) {
        element.selected = 'true';
      } else {
        element.selected = 'false';
      }
    });
    console.log(filterFeedData)
    dispatch(getFeedData(filterFeedData));
    dispatch({
      type: actions.SET_HOME_DATA,
      payload: routineDifficulty,
    });
    
    dispatch({
      type: actions.SET_SELECT_ID,
      payload: selectID,
    });
  };
};

const resetCategoryData = () => {
  return async (dispatch) => {
    dispatch({
      type: actions.SET_SUBCATEGORY_DATA,
      payload: 0,
    });
    dispatch({
      type: actions.RESET_FEED_DATA,
      payload: true,
    });
  };
};

export default {
  getFeedData,
  setHomeData,
  resetCategoryData,
};
