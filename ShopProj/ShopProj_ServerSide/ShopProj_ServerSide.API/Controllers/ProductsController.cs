using ShopProj_ServerSide.Business.Services;
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

    public class ProductsController : ApiController
    {
        private static readonly log4net.ILog Logger = log4net.LogManager.GetLogger(typeof(ProductsController));

        ProductListService productListService = new ProductListService();

        // api/Products/GetProductList
        [HttpGet]

        public HttpResponseMessage GetProductList()
        {
            try
            {
                ProductListResponse response = productListService.GetProductList();

                return Request.CreateResponse(HttpStatusCode.OK, response);
            }

            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
