import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../Actions/index"

const initialState = {
  items: [],
  loading: false,
  err: "",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        items: {},
        isFetching: true,
        error: "",
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
        error: "",
      }
    case FETCH_FAIL:
      return {
        ...state,
        items: {},
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
