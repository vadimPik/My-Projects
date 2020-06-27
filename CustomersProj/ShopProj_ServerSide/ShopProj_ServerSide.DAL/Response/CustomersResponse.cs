using ShopProj_ServerSide.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.DAL.Response
{
    public class CustomersResponse
    {
        #region Properties

        public List<Customer> Customers { get; set; }
        public int TotalCustomersCount { get; set; }
        public Exception ErrorMessage { get; set; }

        #endregion
    }


}
