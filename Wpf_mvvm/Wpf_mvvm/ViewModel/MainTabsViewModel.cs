
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Wpf_mvvm.Model;

namespace Wpf_mvvm.ViewModel
{
    public class MainTabsViewModel : INotifyPropertyChanged
    {
        private static int _dataGridTabs = 1;
        private static int _emailFormTabs = 1;

        public MainTabsViewModel()
        {
            Tabs = new ObservableCollection<ITabViewModel>();
        }

        public ObservableCollection<ITabViewModel> Tabs
        {
            get => _tabs;
            set
            {
                _tabs = value;
                OnPropertyChanged("Tabs");
            }
        }

        private ICommand _addDataGridTab;
        private ICommand _addEmailTab;

        private ObservableCollection<ITabViewModel> _tabs;

        public ICommand AddDataGridTab
        {
            get
            {
                return _addDataGridTab ?? (_addDataGridTab = new MvvmCommand(
                   x =>
                   {
                       AddTabItem("Add DataGrid");
                   }));
            }
        }

        public ICommand AddEmailTab
        {
            get
            {
                return _addEmailTab ?? (_addEmailTab = new MvvmCommand(
                   x =>
                   {
                       AddTabItem("Add Email");
                   }));
            }
        }

        private void AddTabItem(object sender)
        {
            string header;
            ITabViewModel viewModel = null;

            switch (sender.ToString())
            {
                case "Add Email":
                    header = "Email Tab " + _emailFormTabs;
                    _emailFormTabs++;
                    viewModel = new MailFormTabViewModel {Header = header};

                    break;

                case "Add DataGrid":
                    header = "DataGrid Tab " + _dataGridTabs;
                    _dataGridTabs++;
                    viewModel = new DataGridTabViewModel {Header = header};
                    
                    break;
            }

            Tabs.Add(viewModel);
            OnPropertyChanged("Tabs");
        }

        public event PropertyChangedEventHandler PropertyChanged;

        private void OnPropertyChanged(string propertyName)
        {
            VerifyPropertyName(propertyName);
            var handler = PropertyChanged;
            handler?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        [Conditional("DEBUG")]
        private void VerifyPropertyName(string propertyName)
        {
            if (TypeDescriptor.GetProperties(this)[propertyName] == null)
                throw new ArgumentNullException(GetType().Name + " does not contain property: " + propertyName);
        }
    }
}
