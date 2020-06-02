using Newtonsoft.Json;
using ShopProj_ServerSide.DAL;
using ShopProj_ServerSide.DAL.Requests;
using ShopProj_ServerSide.DAL.Response;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.Business.Services
{
    public class LoginService
    {
        private static readonly log4net.ILog Logger = log4net.LogManager.GetLogger(typeof(LoginService));

        public LoginResponse AuthenticateLogIn(LoginRequest user)
        {
            try
            {
                DataSet ds = new DataSet();

                Dictionary<string, string> sqlInParameters = new Dictionary<string, string>();

                sqlInParameters.Add("@UserName", user.userName);
                sqlInParameters.Add("@Password", user.password);

                DataAccess sqlDal = new DataAccess("dbo.AuthenticateLogIn", sqlInParameters);

                ds = sqlDal.Execute_SP();

                DataTable firstTable = ds.Tables[0];

                LoginResponse loginResponse = Helper.ConvertDataTableToObject<LoginResponse>(firstTable)[0];

                return loginResponse;
            }

            catch (Exception ex)
            {
                Logger.Error(ex);

                LoginResponse loginResponse = new LoginResponse();
                loginResponse.ErrorMessage = ex;

                return loginResponse;

            }
        }
    }
}
