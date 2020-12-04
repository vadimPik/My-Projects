

namespace Wpf_mvvm.Model
{
    public class SchoolStudent : ModelBase
    {
        private string _studentId;

        public string StudentId
        {
            get => _studentId;
            set
            {
                _studentId = value;
                NotifyPropertyChanged("StudentID");
            }
        }

        private string _studentFirstName;

        public string StudentFirstName
        {
            get => _studentFirstName;
            set
            {
                _studentFirstName = value;
                NotifyPropertyChanged("StudentFirstName");
            }

        }

        private string _studentLastName;

        public string StudentLastName
        {
            get => _studentLastName;
            set
            {
                _studentLastName = value;
                NotifyPropertyChanged("StudentLastName");
            }

        }

        private string _studentAddress;

        public string StudentAddress
        {
            get => _studentAddress;
            set
            {
                _studentAddress = value;
                NotifyPropertyChanged("StudentAdress");
            }

        }

        private string _studentGpa;
        public string StudentGpa
        {
            get => _studentGpa;
            set
            {
                _studentGpa = value;
                NotifyPropertyChanged("StudentGpa");
            }

        }

        private string _studentClassNumber;
        public string StudentClassNumber
        {
            get => _studentClassNumber;
            set
            {
                _studentClassNumber = value;
                NotifyPropertyChanged("StudentClassNumber");
            }

        }


    }
}
