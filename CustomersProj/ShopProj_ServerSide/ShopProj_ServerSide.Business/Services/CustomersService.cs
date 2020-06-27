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
               // DataSet ds = new DataSet();

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
                

                //   DataSet dsCustomers =  sqlDal.Execute_SP();
                //   DataSet dsTotalCount = sqlDal.Execute_SP();
                DataSet dsCustomers = await sqlDal.Execute_SP_Async();
                //    DataSet dsTotalCount = await sqlDal.Execute_SP_Async();

                if (dsCustomers.Tables.Count > 0)
                {

                    DataTable firstTable = dsCustomers.Tables[0];

                    customersResponse.Customers = Helper.ConvertDataTableToObject<Customer>(firstTable);

                    int totalCount = -1;

                    //if (dsTotalCount.Tables[0].Rows.Count != 0)
                    //{
                    //    //Get values from DataTable result
                    //    DataRow result = dsTotalCount.Tables[0].Rows[0];

                    //    totalCount = Convert.ToInt32(result["totalCustomersCount"]);
                    //}

                    customersResponse.totalCustomersCount = totalCount;
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

                //   ds = sqlDal.Execute_SP();
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
                //string customerID = string.Empty;

                //if (firstTable.Rows.Count != 0)
                //{
                //    //Get values from DataTable result
                //    DataRow result = firstTable.Rows[0];

                //    customerID = result["CustomerID"].ToString();
                //}

                //newCustomer.CustomerID = customerID;
                //newCustomer.CustomerName = customer.CustomerName;
                //newCustomer.CustomerEmail = customer.CustomerEmail;
                //newCustomer.CustomerAdress = customer.CustomerAdress;

                return duplicateErrorMassage;
             //   return newCustomer;
             //    return "Record has successfully Added";
            }

            catch (Exception ex)
            {
                Logger.Error(ex);
                Customer newCustomer = new Customer();

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

                //  ds = sqlDal.Execute_SP();
                ds = await sqlDal.Execute_SP_Async();

                //DataTable firstTable = ds.Tables[0];

                //string userId = string.Empty;

                //if (firstTable.Rows.Count != 0)
                //{
                //    //Get values from DataTable result
                //    DataRow result = firstTable.Rows[0];

                //    userId = result["userID"].ToString();
                //}

                //  int ShoppingListID = Helper.ConvertDataTableToObject<int>(firstTable)[0];

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
