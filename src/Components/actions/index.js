import axios from "axios";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getData = () => {
  return (dispatch) => {
    dispatch(fetchStart());

    axios
      .get("https://buildweek4-africanmarketplace.herokuapp.com/api/auth/items")
      .then((resp) => {
        console.log(resp)
        dispatch(fetchSuccess(resp.data[1]));
        // dispatch({type: FETCH_SUCCESS, payload:resp.data.results[0] });
      })
      .catch((err) => {
        dispatch(fetchFail(err));
        // dispatch({type: FETCH_FAIL, payload: err});
      });
  };
};

export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (item) => {
  return { type: FETCH_SUCCESS, payload: item };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};

//-------------------------------  action  for logging in  -------------

export const loggingIn = () => {
  return { type: SIGN_IN };
};
export const loggingOut = () => {
  return { type: SIGN_OUT };
};
