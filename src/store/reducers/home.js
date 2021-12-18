import actions from '../constants';
import homeData from '../../assets/data/homeData';
import subCategories from '../../assets/data/subCategories';

const INITIAL_STATE = {
  feedData: homeData,
  subData: subCategories, //data of subCategories can be loaded here?
  selectID: 0,
};

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_FEED_DATA:
      return {...state, feedData: action.payload};
    case actions.SET_SUBCATEGORY_DATA:
      return {...state, subData: action.payload};
    case actions.SET_SELECT_ID:
      return {...state, selectID: action.payload};
    case actions.SET_HOME_DATA:
      return {...state, selectID: action.payload};
    case actions.RESET_FEED_DATA:
      return {...state, feedData: homeData, subData: subCategories};
    default:
      return state;
  }
};

export default home;
