using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.DAL.Requests
{
    public class PaginationRequest
    {
        #region Properties

        public PaginationRequest()
        {
            pageNumber = 1;
            pageSize = 20;
        }

        public int pageNumber { get; set; }
        public int pageSize { get; set; }

        #endregion
    }
}
