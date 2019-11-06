const initialState = {
  data: [],
  error: null,
  isLoading: true,
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_FAVORITES_PENDING': {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case 'GET_ALL_FAVORITES_FULFILLED': {
      return {
        ...state,
        data: action.payload,
        isLoading: action.isLoading,
      };
    }
    case 'GET_ALL_FAVORITES_REJECTED': {
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

export default favorites;
