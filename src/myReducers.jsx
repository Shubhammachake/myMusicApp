const ini = {
  token: null,
  isLog: false,
  // userCredentials: "",
  item: [],
};
// actions.js

// myReducers.js (or wherever you define your action creators)

export const UPDATE_TOKEN_AND_LOG = "UPDATE_TOKEN_AND_LOG";
export const LOGOUT_UPDATE = "LOGOUT_UPDATE ";
export const TRACK_ITEM_CLICK = "TRACK_ITEM_CLICK";
// export const USER_CREDENTIALS = "USER_CREDENTIALS";
// export const GET_LATEST_DATA = "GET_LATEST_DATA";
export const updateTokenAndLogAction = (token, isLog) => ({
  type: UPDATE_TOKEN_AND_LOG,
  payload: { token, isLog },
});

export const LoggedOut = (token, isLog) => ({
  type: LOGOUT_UPDATE,
  payload: { token, isLog },
});
export const getMoviedata = (latestMovie) => ({
  type: GET_LATEST_DATA,
  payload: { latestMovie },
});
export const trackItem = (item) => ({
  type: TRACK_ITEM_CLICK,
  payload: { item },
});

const myReducers = (state = ini, action) => {
  switch (action.type) {
    case UPDATE_TOKEN_AND_LOG:
      return {
        ...state,
        token: action.payload.token,
        isLog: action.payload.isLog,
      };

    case LOGOUT_UPDATE:
      return {
        ...state,
        token: action.payload.token,
        isLog: action.payload.isLog,
      };

    case TRACK_ITEM_CLICK:
      return {
        ...state,
        item: [...state.item, action.payload],
      };
    default:
      return state;
  }
};
export default myReducers;
