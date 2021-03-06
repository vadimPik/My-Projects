﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace Wpf_mvvm.ViewModel
{
    /// <summary>
    ///  Message Box Service to show messageBox.
    /// </summary>
    public class MyMessageBoxService : IMessageBoxService
    {
        public void ShowMessage(string text, string header)
        {
            MessageBox.Show(text, header, MessageBoxButton.OK, MessageBoxImage.Information);
        }
    }
}
