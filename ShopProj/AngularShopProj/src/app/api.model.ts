export enum ApiURL {
    login = 'http://localhost:52941/api/Login/AuthenticateLogIn',
    getProducts = 'http://localhost:52941/api/Products/GetProductList',
    addProductToShoppingList = 'http://localhost:52941/api/ShoppingList/AddProduct',
    deleteProductFromShoppingList = 'http://localhost:52941/api/ShoppingList/DeleteProduct',
    updateQuantityProductOnShoppingList = 'http://localhost:52941/api/ShoppingList/UpdateQuantityProduct',
    getShoppingListProducts = 'http://localhost:52941/api/ShoppingList/GetShoppingListProductList',


    //Hosted on IIS

    // login = 'http://localHost/ShopProj_Client_Site/api/Login/AuthenticateLogIn',
    // getProducts = 'http://localHost/ShopProj_Client_Site/api/Products/GetProductList',
    // addProductToShoppingList = 'http://localHost/ShopProj_Client_Site/api/ShoppingList/AddProduct',
    // deleteProductFromShoppingList = 'http://localHost/ShopProj_Client_Site/api/ShoppingList/DeleteProduct',
    // updateQuantityProductOnShoppingList = 'http://localHost/ShopProj_Client_Site/api/ShoppingList/UpdateQuantityProduct',
    // getShoppingListProducts = 'http://localHost/ShopProj_Client_Site/api/ShoppingList/GetShoppingListProductList',
}