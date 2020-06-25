using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.Business
{
    public static class Helper
    {
        public static List<T> ConvertDataTableToObject<T>(this DataTable dt)
        {
            List<T> list = Activator.CreateInstance<List<T>>();
            T instance = Activator.CreateInstance<T>();
            var prop = instance.GetType().GetProperties(BindingFlags.DeclaredOnly | BindingFlags.Public | BindingFlags.Instance);
            foreach (DataRow dr in dt.Rows)
            {
                T ins = Activator.CreateInstance<T>();
                foreach (var p in prop)
                {
                    try
                    {
                        p.SetValue(ins, dr[p.Name], null);
                    }
                    catch { }
                }
                list.Add(ins);
            }
            return list;
        }

    }
}
