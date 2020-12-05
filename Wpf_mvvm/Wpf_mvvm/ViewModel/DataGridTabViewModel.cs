using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.IO;
using System.Linq;
using System.Reflection;
using System.ServiceModel.Channels;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using System.Windows.Threading;
using Newtonsoft.Json;
using Wpf_mvvm.Model;

namespace Wpf_mvvm.ViewModel
{
    public class DataGridTabViewModel : ViewModelBase, ITabViewModel
    {
        public string Header { get; set; }

        public DataGridTabViewModel()
        {
            Students = new ObservableCollection<SchoolStudent>();
            //{
            //    new SchoolStudent()
            //{
            //    StudentClassNumber = "1",
            //        StudentFirstName = "Avi",
            //        StudentLastName = "Katz",
            //        StudentAddress = "4697  Melrose Street",
            //        StudentGpa = "80",
            //        StudentId = "310345674"
            //    },
            //    new SchoolStudent()
            //    {
            //        StudentClassNumber = "2",
            //        StudentFirstName = "Moshe",
            //        StudentLastName = "Biton",
            //        StudentAddress = "4513  Godfrey Road",
            //        StudentGpa = "95",
            //        StudentId = "278909434"
            //    },
            //    new SchoolStudent()
            //    {
            //        StudentClassNumber = "2",
            //        StudentFirstName = "Moshe",
            //        StudentLastName = "Biton",
            //        StudentAddress = "2383  Tecumsah Lane",
            //        StudentGpa = "95",
            //        StudentId = "278909434"
            //    }
            //};
        }

        private ObservableCollection<SchoolStudent> _students;

        public ObservableCollection<SchoolStudent> Students
        {
            get => _students;
            set
            {
                _students = value;
                NotifyPropertyChanged("Students");
            }
        }

        private ICommand _loadStudents;

        public ICommand LoadStudentsBtn
        {
            get
            {
                return _loadStudents ?? (_loadStudents = new MvvmCommand(
                    x =>
                    {
                        LoadStudents();
                    }));
            }
        }

        private void LoadStudents()
        {
            var filePath = string.Empty;

            try
            {
                filePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location) ?? string.Empty, @"Model\Students.Json"); 
                if (string.IsNullOrEmpty(filePath) || !File.Exists(filePath)) return;

                var studentJson = JsonConvert.DeserializeObject<List<SchoolStudent>>(File.ReadAllText(filePath)) as IEnumerable;

                Students = new ObservableCollection<SchoolStudent>(studentJson.OfType<SchoolStudent>());

                NotifyPropertyChanged("Students");
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Cannot read Students json file: '{filePath}'.{Environment.NewLine} The Error is: {Environment.NewLine}'{ex.Message}'", ex);
            }
        }

        // public IList<SchoolStudent> Students { get; set; }
    }
}
