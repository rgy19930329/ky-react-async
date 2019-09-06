const initialState = {
  isOpen: true,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case "toggle":
      return Object.assign({}, state, {
        isOpen: !state.isOpen,
      });
    default:
      return state;
  }
}