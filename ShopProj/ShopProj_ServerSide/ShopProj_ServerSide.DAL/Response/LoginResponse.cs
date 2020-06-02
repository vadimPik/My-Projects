using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.DAL.Response
{
    public class LoginResponse
    {
        #region Properties

        public string UserID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string CreditCardNumber { get; set; }
        public string CvvNumber { get; set; }
        public DateTime ExpiredInDate { get; set; }
        public DateTime LastLoginDate { get; set; }
        public Exception ErrorMessage { get; set; }

        #endregion
    }
}
