

namespace Wpf_mvvm.Model
{
    public class SchoolStudent : ModelBase
    {
        private string _studentTz;

        public string StudentTz
        {
            get { return _studentTz; }
            set
            {
                _studentTz = value;
                NotifyPropertyChanged("StudentTz");
            }
        }

        private string _studentFirstName;

        public string StudentFirstName
        {
            get { return _studentFirstName; }
            set
            {
                _studentFirstName = value;
                NotifyPropertyChanged("StudentFirstName");
            }

        }

        private string _studentLastName;

        public string StudentLastName
        {
            get { return _studentLastName; }
            set
            {
                _studentLastName = value;
                NotifyPropertyChanged("StudentLastName");
            }

        }

        private string _studentClassNumber;
        public string StudentClassNumber
        {
            get { return _studentClassNumber; }
            set
            {
                _studentClassNumber = value;
                NotifyPropertyChanged("StudentClassNumber");
            }

        }


    }
}
