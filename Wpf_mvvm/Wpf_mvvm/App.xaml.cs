using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Threading;
using Ninject;
using Wpf_mvvm.ViewModel;

namespace Wpf_mvvm
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        //private void App_Startup(object sender, StartupEventArgs e)
        //{
        //    IKernel iocKernel = new StandardKernel();
        //    iocKernel.Bind<IMessageBoxService>().To<MyMessageBoxService>();

        //    var mainTabsVM = iocKernel.Get<MainTabsViewModel>();

        //    MainWindow = new MainWindow {DataContext = mainTabsVM };
        //    MainWindow.Show();
        //}

        private void Application_DispatcherUnhandledException(object sender, DispatcherUnhandledExceptionEventArgs e)
        {
            MessageBox.Show($"An exception occurred: {Environment.NewLine}{e.Exception.Message}", "My WPF Project", MessageBoxButton.OK, MessageBoxImage.Warning);
            e.Handled = true;
        }
    }
}
