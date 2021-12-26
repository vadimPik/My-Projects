
// In this project i used "redux-toolkit"- it is a redux package for react that wrap the state and give a ability to write "normal" - without the ability to change the state wrongly.
//Documentation: https://redux-toolkit.js.org/introduction/getting-started

export  const addRankValue = (state, action) => {
    const favoriteItemId = action.payload.id;
    const existingItem = state.items.find((item) => item.id === favoriteItemId);
    if (existingItem) {
      existingItem.Rank = action.payload.rankValue;
    } else {
    }
};