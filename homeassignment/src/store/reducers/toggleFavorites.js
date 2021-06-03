
// In this project i used "redux-toolkit"- it is a redux package for react that wrap the state and give a ability to write "normal" - without the ability to change the state wrongly.
//Documentation: https://redux-toolkit.js.org/introduction/getting-started

export  const toggleFavorites = (state, action) => {
    const favoriteItemId = action.payload;
    const existingItem = state.items.find((item) => item.id === favoriteItemId);
    if (existingItem) {
      existingItem.isFavorite = !existingItem.isFavorite;
      existingItem.Rank = '';
      existingItem.isHover = !existingItem.isHover;
    } else {
    }
};