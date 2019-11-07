import * as types from '../types';

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  data: [],
};

export default reducersWebtoons = (state = initialState, action) => {
  switch (action.type) {
    case `${types.GET_TOONS}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case `${types.GET_TOONS}_FULFILLED`: {
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.payload.data,
      };
    }
    case `${types.GET_TOONS}_REJECTED`: {
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
