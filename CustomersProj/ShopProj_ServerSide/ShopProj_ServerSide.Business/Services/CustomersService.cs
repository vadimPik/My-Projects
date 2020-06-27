using ShopProj_ServerSide.Business.Interfaces;
using ShopProj_ServerSide.DAL;
using ShopProj_ServerSide.DAL.Models;
using ShopProj_ServerSide.DAL.Requests;
using ShopProj_ServerSide.DAL.Response;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static ShopProj_ServerSide.Business.Enums.AddCustomerExceptioEnum;

namespace ShopProj_ServerSide.Business.Services
{
    public class CustomersService : ICustomersService
    {
        private static readonly log4net.ILog Logger = log4net.LogManager.GetLogger(typeof(CustomersService));

        public async Task<CustomersResponse> GetCustomers(PaginationRequest paginationRequest)
        {
            try
            {
                Dictionary<string, string> sqlInParameters = new Dictionary<string, string>();

                CustomersResponse customersResponse = new CustomersResponse();

                DataAccess sqlDal = null;

                if (paginationRequest.sortType.Contains("DESC"))
                {
                    sqlDal = new DataAccess("dbo.GetCustomers_DESC", sqlInParameters);
                }

                else
                {
                    sqlDal = new DataAccess("dbo.GetCustomers_ASC", sqlInParameters);
                }
              //  DataAccess sqlDal = new DataAccess("dbo.GetCustomers", sqlInParameters);

                sqlInParameters.Add("@PageNumber", paginationRequest.pageNumber.ToString());
                sqlInParameters.Add("@PageSize", paginationRequest.pageSize.ToString());
                sqlInParameters.Add("@SortColumn", paginationRequest.sortColumn);
                

                DataSet dsCustomers = await sqlDal.Execute_SP_Async();

                if (dsCustomers.Tables.Count > 0)
                {

                    DataTable firstTable = dsCustomers.Tables[0];

                    customersResponse.Customers = Helper.ConvertDataTableToObject<Customer>(firstTable);

                    int totalCount = await GetTotalCustomers();

                    customersResponse.TotalCustomersCount = totalCount;
                }

                return customersResponse;
            }

            catch (Exception ex)
            {
                Logger.Error(ex);

                CustomersResponse customersResponse = new CustomersResponse();
                customersResponse.ErrorMessage = ex;

                return customersResponse;

            }
        }

        public async Task<int> GetTotalCustomers()
        {
            try
            {
                Dictionary<string, string> sqlInParameters = new Dictionary<string, string>();

                DataAccess sqlDal = new DataAccess("dbo.GetTotalCustomers", sqlInParameters); ;


                DataSet dsTotal = await sqlDal.Execute_SP_Async();

                int totalCount = -1;

                if (dsTotal.Tables.Count > 0)
                {

                    DataTable firstTable = dsTotal.Tables[0];

                    if (firstTable.Rows.Count != 0)
                    {

                        DataRow result = firstTable.Rows[0];

                        totalCount = int.Parse(result["totalCustomersCount"].ToString());
                    }
                }

                return totalCount;
            }

            catch (Exception ex)
            {
                Logger.Error(ex);

                return -1;

            }
        }

        public async Task<string> AddCustomer(Customer customer)
        {
            try
            {
                DataSet ds = new DataSet();
                Customer newCustomer = new Customer();

                Dictionary<string, string> sqlInParameters = new Dictionary<string, string>();

                sqlInParameters.Add("@CustomerID", customer.CustomerID);
                sqlInParameters.Add("@CustomerName", customer.CustomerName);
                sqlInParameters.Add("@CustomerEmail", customer.CustomerEmail);
                sqlInParameters.Add("@CustomerAdress", customer.CustomerAdress);

                DataAccess sqlDal = new DataAccess("dbo.AddCustomer", sqlInParameters);

                ds = await sqlDal.Execute_SP_Async();

                string duplicateErrorMassage = "Record has successfully Added";

                if (ds.Tables.Count > 0)
                {
                    DataTable firstTable = ds.Tables[0];


                    int errorID = 0;

                    if (firstTable.Rows.Count != 0)
                    {

                        DataRow result = firstTable.Rows[0];

                        errorID = int.Parse(result["DuplicateError"].ToString());

                        if (errorID == AddCustomerException.DuplicateID.GetHashCode())
                        {
                            duplicateErrorMassage = "ID already exists!";
                        }
                        else if (errorID == AddCustomerException.DuplicateEmail.GetHashCode())
                        {
                            duplicateErrorMassage = "Email already exists!";
                        }
                    }
                }

                return duplicateErrorMassage;
            }

            catch (Exception ex)
            {
                Logger.Error(ex);
             //   Customer newCustomer = new Customer();

              //  return newCustomer;
                 return ex.ToString();

            }
        }

        public async Task<string> DeleteCustomer(string customerIDToDelete)
        {
            try
            {
                DataSet ds = new DataSet();

                Dictionary<string, string> sqlInParameters = new Dictionary<string, string>();

                sqlInParameters.Add("@CustomerID", customerIDToDelete.ToString());
               
                DataAccess sqlDal = new DataAccess("dbo.DeleteCustomer", sqlInParameters);

                ds = await sqlDal.Execute_SP_Async();


                return "Record has successfully Deleted";
            }

            catch (Exception ex)
            {
                Logger.Error(ex);

                return ex.ToString();

            }
        }
    }
}
