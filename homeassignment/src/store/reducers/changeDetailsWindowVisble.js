export  const changeDetailsWindowVisble = (state, action) => {
    const favoriteItemId = action.payload.id;
    const existingItem = state.items.find((item) => item.id === favoriteItemId);
    if (existingItem) {
      existingItem.isDetailsModalVisible = action.payload.isVisible;
    } else {
    }
};