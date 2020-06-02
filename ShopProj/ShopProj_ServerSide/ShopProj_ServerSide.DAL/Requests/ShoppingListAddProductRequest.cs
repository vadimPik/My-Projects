using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.DAL.Requests
{
    public class ShoppingListAddProductRequest
    {
        #region Properties

        public int ShoppingListID { get; set; }
        public string UserID { get; set; }
        public int ItemID { get; set; }
        public int Quantity { get; set; }
        public double productPrice { get; set; }
        public int Status { get; set; }

        #endregion
    }
}
