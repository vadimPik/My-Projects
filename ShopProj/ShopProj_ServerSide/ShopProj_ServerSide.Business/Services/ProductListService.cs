using ShopProj_ServerSide.DAL;
using ShopProj_ServerSide.DAL.Response;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShopProj_ServerSide.Business.Services
{
    public class ProductListService
    {
        private static readonly log4net.ILog Logger = log4net.LogManager.GetLogger(typeof(ProductListService));

        public ProductListResponse GetProductList()
        {
            try
            {
                DataSet ds = new DataSet();

                Dictionary<string, string> sqlInParameters = new Dictionary<string, string>();

                ProductListResponse productListResponse = new ProductListResponse();
                DataAccess sqlDal = new DataAccess("dbo.GetProducts", sqlInParameters);

                ds = sqlDal.Execute_SP();

                DataTable firstTable = ds.Tables[0];

                productListResponse.products = Helper.ConvertDataTableToObject<Product>(firstTable);

                return productListResponse;
            }

            catch (Exception ex)
            {
                Logger.Error(ex);

                ProductListResponse productListResponse = new ProductListResponse();
                productListResponse.ErrorMessage = ex;

                return productListResponse;

            }
        }
    }
}
