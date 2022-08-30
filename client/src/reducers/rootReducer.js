const initialState = {
  credentials: {
    username: "",
    password: "",
  },
  user: "",
  company: "",
};

/* Action Types */
const ERASE_SESSION = "ERASE_SESSION";
const SET_CREDENTIALS = "SET_CREDENTIALS";
const SET_USERNAME = "SET_USERNAME";
const SET_PASSWORD = "SET_PASSWORD";
const SET_USER = "SET_USER";
const SET_COMPANY = "SET_COMPANY";

/* Reducer Function */
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERASE_SESSION:
      return initialState;
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
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_COMPANY:
      return {
        ...state,
        company: action.company,
      };
    default:
      return state;
  }
};

/* Action Creators */
export const eraseSession = () => ({
  type: ERASE_SESSION,
});

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

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const setCompany = (company) => ({
  type: SET_COMPANY,
  company,
});

/* Selectors */
export const getCredentials = ({ credentials }) => credentials;

export const getUser = ({ user }) => user;

export const getCompany = ({ company }) => company;

export default rootReducer;
