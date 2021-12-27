import { POSTS_DATA } from "./types";

const initialState = {
  data: [],
};

const AppData = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_DATA:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};

export default AppData;
