const isLoggedIn = {
  loggedIn: false,
};

const isLoggedReducer = (state = isLoggedIn, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        loggedIn: true,
      };
    case "SIGN_OUT":
      return {
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default isLoggedReducer;
