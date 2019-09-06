const initialState = {
  count: 0,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "increase":
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    case "decrease":
      return Object.assign({}, state, {
        count: state.count - 1,
      });
    default:
      return state;
  }
}