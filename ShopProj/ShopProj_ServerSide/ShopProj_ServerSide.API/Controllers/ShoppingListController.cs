using ShopProj_ServerSide.Business.Services;
using ShopProj_ServerSide.DAL.Requests;
using ShopProj_ServerSide.DAL.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ShopProj_ServerSide.API.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]

    public class ShoppingListController : ApiController
    {
        private static readonly log4net.ILog Logger = log4net.LogManager.GetLogger(typeof(ShoppingListController));

        ShoppingListService shoppingListService = new ShoppingListService();

        ShoppingListDeleteRequest shoppingListDeleteRequest = new ShoppingListDeleteRequest();


        // api/ShoppingList/GetShoppingListProductList
        [HttpPost]

        public HttpResponseMessage GetShoppingListProductList([FromBody] string userID)
        {
            try
            {
                List<ShoppingListProduct> response = shoppingListService.GetShoppingListProductList(userID);

                return Request.CreateResponse(HttpStatusCode.OK, response);
            }

            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        // api/ShoppingList/AddProduct
        [HttpPost]

        public HttpResponseMessage AddProduct([FromBody] ShoppingListAddProductRequest product)
        {
            try
            {
                //Return "ShoppingListID" from DB.
                int response = shoppingListService.AddProduct(product);

                return Request.CreateResponse(HttpStatusCode.OK, response);
            }

            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }


        // api/ShoppingList/DeleteProduct
        [HttpPost]

        public HttpResponseMessage DeleteProduct([FromBody] ShoppingListDeleteRequest productToDelete)
        {
            try
            {
                string response = shoppingListService.DeleteProduct(productToDelete);

                return Request.CreateResponse(HttpStatusCode.OK, response);
            }

            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        // api/ShoppingList/UpdateQuantityProduct
        [HttpPost]

        public HttpResponseMessage UpdateQuantityProduct([FromBody] ShoppingListUpdateQuantityRequest productToUpdate)
        {
            try
            {
                int response = shoppingListService.UpdateQuantityOfProduct(productToUpdate);

                return Request.CreateResponse(HttpStatusCode.OK, response);
            }

            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }


        


    }
}
