using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ninject.Modules;
using Wpf_mvvm.Helpers;
using Wpf_mvvm.ViewModel;

namespace Wpf_mvvm.IocNinject
{
    // Ninject Dependency Injection - ServiceModule - Injected classes
    public class ServiceModule: NinjectModule
    {
        public override void Load()
        {
            Bind<IMessageBoxService>().To<MyMessageBoxService>();
            Bind<IEmailSend>().To<EmailSend>();
            Bind<MailFormTabViewModel>().ToSelf();
            Bind<DataGridTabViewModel>().ToSelf();
        }
    }
}
