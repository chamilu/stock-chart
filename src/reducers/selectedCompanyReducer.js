const selectedCompanyReducer = (state = null, action) => {
  switch (action.type) {
    case "GET_SELECTED_COMPANY":
      return action.payload ? action.payload : null;
      break;

    default:
      return state;
  }
};

export default selectedCompanyReducer;