import { ACTIVE, INACTIVE } from "../actions/index";

// const isLoggedIn = {
//   loggedIn: false,
// };

const homeButtonReducer = (state = false, action) => {
  switch (action.type) {
    case ACTIVE:
      return {
        state: true,
      };
    case INACTIVE:
      return {
        state: false,
        
      };
    default:
      return state;
  }
};

export default homeButtonReducer;