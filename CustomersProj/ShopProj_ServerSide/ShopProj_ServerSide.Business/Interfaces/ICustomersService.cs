using ShopProj_ServerSide.DAL.Models;
using ShopProj_ServerSide.DAL.Requests;
using ShopProj_ServerSide.DAL.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.Business.Interfaces
{
    public interface ICustomersService
    {
        Task<CustomersResponse> GetCustomers(PaginationRequest paginationRequest);

        Task<string> DeleteCustomer(int customerIndexToDelete);

        Task<Customer> AddCustomer(Customer customer);
    }
}
