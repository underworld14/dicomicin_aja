const initialState = {
  data: [],
  error: null,
  isLoading: true,
};

const details = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DETAILS_PENDING': {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case 'GET_ALL_DETAILS_FULFILLED': {
      return {
        ...state,
        data: action.payload,
        isLoading: action.isLoading,
      };
    }
    case 'GET_ALL_DETAILS_REJECTED': {
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

export default details;
