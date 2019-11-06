const initialState = {
  data: [],
  error: null,
  isLoading: true,
};

const episodes = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_EPISODES_PENDING': {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case 'GET_ALL_EPISODES_FULFILLED': {
      return {
        ...state,
        data: action.payload,
        isLoading: action.isLoading,
      };
    }
    case 'GET_ALL_EPISODES_REJECTED': {
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

export default episodes;
