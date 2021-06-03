export  const toggleHover = (state, action) => {
    const favoriteItemId = action.payload;
    const existingItem = state.items.find((item) => item.id === favoriteItemId);
    if (existingItem) {
      existingItem.isHover = !existingItem.isHover;
    } else {
    }
};