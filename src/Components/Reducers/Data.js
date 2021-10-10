import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions/index"

const initialState = {
item: {
  item_id: null,
  location: null,
  name: "",
  item_type: "",
  description: "",
  price: null,
},
isFetching: false,
error: ''
};

const dataLoadReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        items: {},
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        items: {},
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataLoadReducer;
