import { types } from "../constants";

export const loaderReducer = (state = { isLoading: false }, action) => {
  switch (action.type) {
    case types.SHOW_GRAPH_LOADER:
      return { isLoading: true };
      break;

    case types.HIDE_GRAPH_LOADER:
      return { isLoading: false };
      break;

    default:
      return state;
  }
};
