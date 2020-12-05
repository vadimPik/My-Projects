using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using Wpf_mvvm.Model;

namespace Wpf_mvvm.ViewModel
{
    public class MailFormTabViewModel : ViewModelBase, ITabViewModel
    {
        public string Header { get; set; }

        //private bool _DialogVisible = false;
        //public bool DialogVisible
        //{
        //    get { return this._DialogVisible; }
        //    set
        //    {
        //        if (this._DialogVisible != value)
        //        {
        //            this._DialogVisible = value;
        //            RaisePropertyChanged(() => this.DialogVisible);
        //        }
        //    }
        //}
        private readonly IMessageBoxService MessageBoxService;
        public MailFormTabViewModel(IMessageBoxService messageBoxService)
        {
            MessageBoxService = messageBoxService;
            Student = new SchoolStudent();
        }

        private SchoolStudent _student;
        public SchoolStudent Student
        {
            get => _student;
            set
            {
                _student = value;
                NotifyPropertyChanged("Student");
            }
        }

        private ICommand _sentMail;

        public ICommand SendMailBtn
        {
            get
            {
                return _sentMail ?? (_sentMail = new MvvmCommand(param => SendMail(param)));
            }
        }

        private void SendMail(object mailTo)
        {
            //MessageBox.Show(mailTo.ToString());
            var ShowMessageCommand = new MvvmCommand(
                x =>
                {
                    MessageBoxService.ShowMessage(mailTo.ToString(), "SendMail");
                });

        }
    }
}
