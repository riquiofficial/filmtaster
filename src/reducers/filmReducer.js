const initState = {
  popular: [],
  searched: [],
};

const filmReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_FILMS":
      return {
        ...state,
        popular: action.payload.popular,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
      };
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    default:
      return { ...state };
  }
};

export default filmReducer;
