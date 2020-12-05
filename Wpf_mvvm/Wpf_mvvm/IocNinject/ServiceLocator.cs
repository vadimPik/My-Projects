using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Ninject;
using Wpf_mvvm.ViewModel;

namespace Wpf_mvvm.IocNinject
{
    /// <summary>
    /// Ninject Dependency Injection - ServiceLocator
    /// </summary>
    public class ServiceLocator
    {
        private readonly IKernel _iocKernel;

        public ServiceLocator()
        {
            _iocKernel = new StandardKernel(new ServiceModule());
        } 
       public MainTabsViewModel MainTabsViewModel => _iocKernel.Get<MainTabsViewModel>();
       public MailFormTabViewModel MailFormTabViewModel => _iocKernel.Get<MailFormTabViewModel>();
    }
}
