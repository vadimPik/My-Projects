using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using Wpf_mvvm.Model;

namespace Wpf_mvvm.Helpers
{
    /// <summary>
    /// Send Email - missing Credentials.
    /// </summary>
    public class EmailSend : IEmailSend
    {
        public bool SendEmail(SchoolStudent student, string emailAddress)
        {
            var message = new MailMessage();

            // Email Address
            message.To.Add(emailAddress);
            message.Subject = "New Student Details";
            message.From = new MailAddress("noreply-myProject@VadimPik.com");
            message.Body =
                $"StudentId = {student.StudentId}{Environment.NewLine} Student FirstName= {student.StudentFirstName}{Environment.NewLine} Student LastName= {student.StudentLastName}{Environment.NewLine} student Address= {student.StudentAddress}{Environment.NewLine} StudentGPA= {student.StudentGpa}{Environment.NewLine}";

            #region Send Mail

            var smtp = new SmtpClient("smtp.gmail.com")
            {
                Credentials = new System.Net.NetworkCredential("youremail", "yourpassword"), EnableSsl = true
            };

            var count = 0;
            var maxTries = 3;

            while (true)
            {
                try
                {
                    // Need to set Credentials
                    //smtp.Send(message);
                    return true;
                }
                catch (Exception ex)
                {
                    if (++count == maxTries)
                    {
                        throw new ApplicationException($"Email failed to send. The Error is: {Environment.NewLine}'{ex.Message}'", ex);
                    }

                    // Console.WriteLine("Email failed to send: Retrying ");
                }
            }

            #endregion
        }
    }
}
