using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.DAL.Response
{
    public class ShoppingListProduct
    {
        #region Properties

        public string ProductName { get; set; }
        public double ProductPrice { get; set; }
        public string ProductPicturePath { get; set; }
        public int ItemID { get; set; }
        public int Quantity { get; set; }
        public int ShoppingListID { get; set; }

        #endregion
    }
}
