export  const removeAllFavoriteItems = (state, action) => {
    state.items.map(item => {item.isFavorite = false;
                            item.Rank = ''
                            item.isHover = false; });
};
