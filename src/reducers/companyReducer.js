const initialState = [
  { id: 0, name: "MSFT" },
  { id: 1, name: "AAPL" },
  { id: 2, name: "INTC" },
  { id: 3, name: "NFLX" },
  { id: 4, name: "ORCL" },
  { id: 5, name: "CMCSA" },
  { id: 6, name: "GOOG" },
  { id: 7, name: "LUV" },
  { id: 8, name: "HOG" },
  { id: 9, name: "GOOGL" },
  { id: 10, name: "AMZN" }
];

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COMPANY_LIST":
      return state;
      break;

    default:
      return state;
  }
};

export default companyReducer;
