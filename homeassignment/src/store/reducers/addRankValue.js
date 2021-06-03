export  const addRankValue = (state, action) => {
    const favoriteItemId = action.payload.id;
    const existingItem = state.items.find((item) => item.id === favoriteItemId);
    if (existingItem) {
      existingItem.Rank = action.payload.rankValue;
    } else {
    }
};