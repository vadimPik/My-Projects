using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Wpf_mvvm.Shared;

namespace Wpf_mvvm.ViewModel
{
    public class MailFormTabViewModel : NotifyPropertyChangedBase, ITabViewModel
    {
        public string Header { get; set; }

        public MailFormTabViewModel()
        {

        }
    }
}
