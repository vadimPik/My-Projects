
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
        static int dataGridTabs = 1;
        static int emailFormTabs = 1;

        public MainTabsViewModel()
        {
            Titles = new ObservableCollection<Item>();
        }

        public ObservableCollection<Item> Titles
        {
            get { return _titles; }
            set
            {
                _titles = value;
                OnPropertyChanged("Titles");
            }
        }

        public class Item
        {
            public string Header { get; set; }
            //public MailFormTabViewModel mailFormTabViewModel { get; set; }
         
            public string Content { get; set; }
        }

        private ICommand _addDataGridTab;
        private ICommand _addEmailTab;
        private ObservableCollection<Item> _titles;

        public ICommand AddDataGridTab
        {
            get
            {
                return _addDataGridTab ?? (_addDataGridTab = new MvvmCommand(
                   x =>
                   {
                       AddDataGridTabItem();
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
                       AddEmailTabItem();
                   }));
            }
        }

        private void AddEmailTabItem()
        {
            var header = "Email Tab " + emailFormTabs;
            var content = "Content " + emailFormTabs;
           // var mailFormTabViewModel = new MailFormTabViewModel();

            var item = new Item { Header = header, Content = content };
            //var item = new Item { Header = header, mailFormTabViewModel = mailFormTabViewModel };

            Titles.Add(item);
            emailFormTabs++;
            OnPropertyChanged("Titles");


          
        }

        private void AddDataGridTabItem()
        {
            var header = "Datagrid Tab " + dataGridTabs;
            var content = "Content " + dataGridTabs;
            var item = new Item { Header = header, Content = content };

            Titles.Add(item);
            dataGridTabs++;
            OnPropertyChanged("Titles");
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
