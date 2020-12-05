using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using Wpf_mvvm.Helpers;
using Wpf_mvvm.Model;

namespace Wpf_mvvm.ViewModel
{
    /// <summary>
    /// Mail form
    /// </summary>
    public class MailFormTabViewModel : ViewModelBase, ITabViewModel
    {
        public string Header { get; set; }

        private readonly IMessageBoxService _messageBoxService;
        private readonly IEmailSend _emailSend;
        public MailFormTabViewModel(IMessageBoxService messageBoxService, IEmailSend emailSend)
        {
            _messageBoxService = messageBoxService;
            _emailSend = emailSend;
            Student = new SchoolStudent();
        }

        // Student form
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

        /// <summary>
        /// Command sendMail
        /// </summary>
        private ICommand _sendMail;

        public ICommand SendMailBtn
        {
            get
            {
                return _sendMail ?? (_sendMail = new MyCommand(param => SendMail(param)));
            }
        }

        /// <summary>
        /// Send Mail of New student. get parameter mailTO
        /// </summary>
        /// <param name="mailTo"></param>
        private void SendMail(object mailTo)
        {
            var emailResult = _emailSend.SendEmail(Student, mailTo.ToString());

            var message = string.Empty;

            message = emailResult ? "Successfully Send Email" : "Failed Send Email";

            // Show messageBox - with success/Failed of mail sent.
            _messageBoxService.ShowMessage(message, "SendMail");

        }
    }
}
