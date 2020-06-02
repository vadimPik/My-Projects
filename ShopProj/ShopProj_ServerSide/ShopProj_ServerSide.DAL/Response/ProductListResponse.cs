using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.DAL.Response
{
    public class ProductListResponse
    {
        #region Properties

        public List<Product> products { get; set; }
        public Exception ErrorMessage { get; set; }

        #endregion
    }

    public class Product
    {
        #region Properties

        public string ProductName { get; set; }
        public double ProductPrice { get; set; }
        public string ProductPicturePath { get; set; }
        public int ItemID { get; set; }

        #endregion

    }
}
