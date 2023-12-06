const initialState = {
  message: '',
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GREETING':
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
