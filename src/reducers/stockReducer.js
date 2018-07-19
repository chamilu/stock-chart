const stockReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COMPANY_STOCKS":
      return state;
      break;

    default:
      return state;
  }
};

export default stockReducer;
