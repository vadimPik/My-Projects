using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace ShopProj_ServerSide.DAL
{
    public class DataAccess
    {
        #region Properties

        // public static string ConnectionString = "Data Source=localhost;Initial Catalog=ShopProj;Integrated Security=True";
        public static string connectionString = ConfigurationManager.AppSettings["connectionString"];
        private string sp_name;

        public string SP_Name
        {
            get { return sp_name; }
            set { sp_name = value; }
        }

        private Dictionary<string, string> sp_params;

        public Dictionary<string, string> SP_Params
        {
            get { return sp_params; }
            set { sp_params = value; }
        }


        #endregion

        #region ctor
        public DataAccess(string SP_Name, Dictionary<string, string> SP_Params)
        {
            this.sp_name = SP_Name;
            this.sp_params = SP_Params;
        }
        #endregion

        #region Public Methode

        public DataSet Execute_SP(bool isStoedProcedure = true)
        {
            SqlConnection con = new SqlConnection(connectionString);

            SqlDataAdapter sda = new SqlDataAdapter();

            // 1.  create a command object identifying the stored procedure
            SqlCommand cmd = new SqlCommand(SP_Name, con);

            if (isStoedProcedure)
            {
                // 2. set the command object so it knows to execute a stored procedure
                cmd.CommandType = CommandType.StoredProcedure;
            }

            else
            {
                // 2. set the command object so it knows to execute text script
                cmd.CommandType = CommandType.Text;
            }

            sda.SelectCommand = cmd;

            // 3. add parameter to command, which will be passed to the stored procedure - as Json

            foreach (var item in sp_params)
            {
                cmd.Parameters.Add(new SqlParameter(item.Key, item.Value));
            }
            //  cmd.Parameters.Add("@Filters", SqlDbType.VarChar).Value = sp_params;

            //Wait to query to Execute.
            cmd.CommandTimeout = 0;

            con.Open();

            DataSet ds = new DataSet();

            sda.Fill(ds);

            con.Close();
            con.Dispose();
            sda.Dispose();

            return ds;

        }


        public async Task<DataSet> Execute_SP_Async(bool isStoedProcedure = true)
        {
            SqlConnection con = new SqlConnection(connectionString);

            SqlDataAdapter sda = new SqlDataAdapter();

            // 1.  create a command object identifying the stored procedure
            SqlCommand cmd = new SqlCommand(SP_Name, con);

            if (isStoedProcedure)
            {
                // 2. set the command object so it knows to execute a stored procedure
                cmd.CommandType = CommandType.StoredProcedure;
            }

            else
            {
                // 2. set the command object so it knows to execute text script
                cmd.CommandType = CommandType.Text;
            }

            sda.SelectCommand = cmd;

            // 3. add parameter to command, which will be passed to the stored procedure - as Json

            cmd.Parameters.Add("@Filters", SqlDbType.VarChar).Value = sp_params;

            //Wait to query to Execute.
            cmd.CommandTimeout = 0;

            await con.OpenAsync();

            DataSet ds = new DataSet();

            await Task.Run(() => sda.Fill(ds));

            con.Close();
            con.Dispose();
            sda.Dispose();

            return ds;

        }

        public void Execute_SP_test(string connectionString)
        {
            SqlConnection con = new SqlConnection(connectionString);

            SqlDataAdapter sda = new SqlDataAdapter();

            // 1.  create a command object identifying the stored procedure
            SqlCommand cmd = new SqlCommand(SP_Name, con);

            // 2. set the command object so it knows to execute a stored procedure
            cmd.CommandType = CommandType.StoredProcedure;

            sda.SelectCommand = cmd;

            // 3. add parameter to command, which will be passed to the stored procedure - as Json

            cmd.Parameters.Add("@Filters", SqlDbType.VarChar).Value = sp_params;

            //Wait to query to Execute.
            cmd.CommandTimeout = 0;

            con.Open();

            SqlDataReader dr;
            dr = cmd.ExecuteReader(CommandBehavior.SingleRow);

            string x = "";
            if (dr.HasRows == true)
            {
                while (dr.Read())
                    x = dr[0].ToString();
            }

            dr.Close();

            // DataSet ds = new DataSet();

            // sda.Fill(ds);

            con.Close();
            con.Dispose();
            sda.Dispose();



        }

        #endregion
    }
}
