using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Wpf_mvvm.Model;

namespace Wpf_mvvm.ViewModel
{
    public class DataGridTabViewModel : ITabViewModel
    {
        public string Header { get; set; }

        public DataGridTabViewModel()
        {
            Students = new List<SchoolStudent>()
            {
                new SchoolStudent()
                {
                    StudentClassNumber = "1",
                    StudentFirstName = "Avi",
                    StudentLastName = "Katz",
                    StudentAddress= "4697  Melrose Street",
                    StudentGpa="80",
                    StudentId = "310345674"
                },
                new SchoolStudent()
                {
                    StudentClassNumber = "2",
                    StudentFirstName = "Moshe",
                    StudentLastName = "Biton",
                    StudentAddress= "4513  Godfrey Road",
                    StudentGpa="95",
                    StudentId = "278909434"
                },
                new SchoolStudent()
                {
                    StudentClassNumber = "2",
                    StudentFirstName = "Moshe",
                    StudentLastName = "Biton",
                    StudentAddress= "2383  Tecumsah Lane",
                    StudentGpa="95",
                    StudentId = "278909434"
                }
            };
        }
        public IList<SchoolStudent> Students { get; set; }
    }
}
