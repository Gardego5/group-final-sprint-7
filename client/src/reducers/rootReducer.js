const initialState = {
  credentials: {
    username: "",
    password: "",
  }
}

/* Action Types */
const SET_CREDENTIALS = "SET_CREDENTIALS";
const SET_USERNAME = "SET_USERNAME";
const SET_PASSWORD = "SET_PASSWORD";

/* Reducer Function */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      return { ...state, credentials: action.credentials };
    case SET_USERNAME:
      return {
        ...state,
        credentials: { ...state.credentials, username: action.username },
      };
    case SET_PASSWORD:
      return {
        ...state,
        credentials: { ...state.credentials, password: action.password },
      };
    default:
      return state;
  }
};

/* Action Creators */
export const setCredentials = (credentials) => ({
  type: SET_CREDENTIALS,
  credentials,
});

export const setUsername = (username) => ({
  type: SET_USERNAME,
  username,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  password,
});

/* Selectors */
export const getCredentials = ({ credentials }) => credentials;

export default rootReducer;
