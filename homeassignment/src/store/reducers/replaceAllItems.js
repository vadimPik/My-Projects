export  const replaceAllItems = (state, action) => {
    state.items = action.payload.items;
};