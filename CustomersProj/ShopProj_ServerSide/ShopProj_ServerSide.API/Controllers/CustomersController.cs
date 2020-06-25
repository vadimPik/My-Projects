using ShopProj_ServerSide.Business.Interfaces;
using ShopProj_ServerSide.Business.Services;
using ShopProj_ServerSide.DAL.Models;
using ShopProj_ServerSide.DAL.Requests;
using ShopProj_ServerSide.DAL.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ShopProj_ServerSide.API.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]

    public class CustomersController : ApiController
    {
        private static readonly log4net.ILog Logger = log4net.LogManager.GetLogger(typeof(CustomersController));

        // CustomersService customersService = new CustomersService();
        private readonly ICustomersService _customersService = new CustomersService();

        // api/Customers/GetProductList
        [HttpPost]

        public async Task<HttpResponseMessage> GetProductList([FromBody] PaginationRequest paginationRequest)
        {
            try
            {
                CustomersResponse response = await _customersService.GetCustomers(paginationRequest);

                return Request.CreateResponse(HttpStatusCode.OK, response);
            }

            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        // api/Customers/AddCustomer
        [HttpPost]

        public async Task<HttpResponseMessage> AddCustomer([FromBody] CustomerAddRequest newCustomer)
        {
            try
            {
                Customer response = await _customersService.AddCustomer(newCustomer);

                return Request.CreateResponse(HttpStatusCode.OK, response);
            }

            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }


        // api/Customers/DeleteCustomer/id
        [HttpDelete]

        public async Task<HttpResponseMessage> DeleteCustomer(int customerIDToDelete)
        //  public async Task<HttpResponseMessage> DeleteCustomer(int customerIDToDelete)
        {
            try
            {
                string response = await _customersService.DeleteCustomer(customerIDToDelete);

                return Request.CreateResponse(HttpStatusCode.OK, response);
            }

            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
