const initialState = {
  data: [],
  error: null,
  isLoading: true,
};

const toons = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_TOONS_PENDING': {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case 'GET_ALL_TOONS_FULFILLED': {
      return {
        ...state,
        data: action.payload,
        isLoading: action.isLoading,
      };
    }
    case 'GET_ALL_TOONS_REJECTED': {
      return {
        ...state,
        error: action.payload,
        isLoading: action.isLoading,
      };
    }
    default: {
      return state;
    }
  }
};

export default toons;
