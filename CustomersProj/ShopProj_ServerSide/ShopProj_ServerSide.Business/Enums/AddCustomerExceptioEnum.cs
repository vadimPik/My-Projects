using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.Business.Enums
{
    public class AddCustomerExceptioEnum
    {
        public enum AddCustomerException
        {
            DuplicateID = 1,
            DuplicateEmail = 2
        }
    }


}
