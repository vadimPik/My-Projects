using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.DAL.Requests
{
    public class ShoppingListDeleteRequest
    {
        #region Properties

        public string UserID { get; set; }
        public int ShoppingListID { get; set; }
        public int ItemID { get; set; }

        //Quantity to delete
        public int Quantity { get; set; }
        public int IndexToDelete { get; set; }

        #endregion
    }
}
