
// In this project i used "redux-toolkit"- it is a redux package for react that wrap the state and give a ability to write "normal" - without the ability to change the state wrongly.
//Documentation: https://redux-toolkit.js.org/introduction/getting-started

export  const addItems = (state, action) => {
    state.items = state.items.concat(action.payload.items);
};