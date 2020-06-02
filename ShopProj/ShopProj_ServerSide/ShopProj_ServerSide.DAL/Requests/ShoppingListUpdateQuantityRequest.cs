using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.DAL.Requests
{
    public class ShoppingListUpdateQuantityRequest
    {
        #region Properties

        public int ShoppingListID { get; set; }
        public int ItemID { get; set; }
        public int Quantity { get; set; }

        #endregion
    }
}
