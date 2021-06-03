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