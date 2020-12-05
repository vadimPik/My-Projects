﻿
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Ninject;
using Wpf_mvvm.Model;

namespace Wpf_mvvm.ViewModel
{
    public class MainTabsViewModel : ViewModelBase //, INotifyPropertyChanged
    {
       // public event PropertyChangedEventHandler PropertyChanged;

        private static int _dataGridTabs = 1;
        private static int _emailFormTabs = 1;
        private static int _selectedIndex = 0;

        private MailFormTabViewModel _mailViewModel;
        private DataGridTabViewModel _dataGridViewModel;
        private readonly IMessageBoxService _mailBoxService;

        public MainTabsViewModel(MailFormTabViewModel mailViewModel, DataGridTabViewModel dataGridViewModel, IMessageBoxService messageBoxService)
        {
            _mailBoxService = messageBoxService;
            _mailViewModel = mailViewModel;
            _dataGridViewModel = dataGridViewModel;
            Tabs = new ObservableCollection<ITabViewModel>();
        }

        private ObservableCollection<ITabViewModel> _tabs;

        public ObservableCollection<ITabViewModel> Tabs
        {
            get => _tabs;
            set
            {
                _tabs = value; 
                NotifyPropertyChanged("Tabs");
            }
        }

        private ICommand _addDataGridTab;
        private ICommand _addEmailTab;

        public int SelectedIndex
        {
            get => _selectedIndex;
            set
            {
                _selectedIndex = value;
                NotifyPropertyChanged("selectedIndex");
            }
        }


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
                    //_mailViewModel.Header = header;
                    //viewModel = _mailViewModel;
                    viewModel = new MailFormTabViewModel(_mailBoxService) {Header = header};

                    break;

                case "Add DataGrid":
                    header = "DataGrid Tab " + _dataGridTabs;
                    _dataGridTabs++;
                   //_dataGridViewModel.Header = header;
                   // viewModel = _dataGridViewModel;
                    viewModel = new DataGridTabViewModel {Header = header};

                    break;
            }

            Tabs.Add(viewModel);
            _selectedIndex++;
            NotifyPropertyChanged("Tabs");
        }
    }
}
