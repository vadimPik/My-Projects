using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wpf_mvvm.Model;

namespace Wpf_mvvm.Helpers
{
    public interface IEmailSend
    {
        bool SendEmail(SchoolStudent student, string emailAddress);
    }
}
