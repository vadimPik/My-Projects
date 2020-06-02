using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.DAL.Requests
{
    public class LoginRequest
    {
        #region Properties

        public string userName { get; set; }
        public string password { get; set; }

        #endregion
    }
}
