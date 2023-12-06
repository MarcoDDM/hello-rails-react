export const setGreeting = (message) => ({
  type: 'SET_GREETING',
  payload: message,
});

export const fetchRandomGreeting = () => {
  return (dispatch) => {
    return fetch('/api/random_greeting')
      .then((response) => response.json())
      .then((data) => dispatch(setGreeting(data.message)));
  };
};
