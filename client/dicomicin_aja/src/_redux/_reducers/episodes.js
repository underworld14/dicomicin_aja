import * as types from '../types';

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  data: [],
};

export default reducersEpisodes = (state = initialState, action) => {
  switch (action.type) {
    case `${types.GET_EPS}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case `${types.GET_EPS}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload.data,
      };
    }
    case `${types.GET_EPS}_REJECTED`: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
