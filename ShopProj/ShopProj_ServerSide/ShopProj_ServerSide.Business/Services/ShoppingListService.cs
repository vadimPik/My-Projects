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
    public class ShoppingListService
    {
        private static readonly log4net.ILog Logger = log4net.LogManager.GetLogger(typeof(ShoppingListService));

        
        public List<ShoppingListProduct> GetShoppingListProductList(string userId)
        {
            try
            {
                DataSet ds = new DataSet();

                Dictionary<string, string> sqlInParameters = new Dictionary<string, string>();

                sqlInParameters.Add("@UserID", userId);

                DataAccess sqlDal = new DataAccess("dbo.GetShoppingListProducts", sqlInParameters);

                ds = sqlDal.Execute_SP();

                DataTable firstTable = ds.Tables[0];

                List<ShoppingListProduct> shoppingListResponse = Helper.ConvertDataTableToObject<ShoppingListProduct>(firstTable);

                return shoppingListResponse;
            }

            catch (Exception ex)
            {
                Logger.Error(ex);

                List<ShoppingListProduct> productListResponse = new List<ShoppingListProduct>();
             

                return productListResponse;

            }
        }
        public int AddProduct(ShoppingListAddProductRequest product)
        {
            try
            {
                DataSet ds = new DataSet();

                Dictionary<string, string> sqlInParameters = new Dictionary<string, string>();

                sqlInParameters.Add("@UserID", product.UserID);
                sqlInParameters.Add("@ShoppingListID", product.ShoppingListID.ToString());
                sqlInParameters.Add("@ItemID", product.ItemID.ToString());
                sqlInParameters.Add("@Quantity", product.Quantity.ToString());
                sqlInParameters.Add("@productPrice", product.productPrice.ToString());
                sqlInParameters.Add("@Status", product.Status.ToString());


                DataAccess sqlDal = new DataAccess("dbo.AddProduct", sqlInParameters);

                ds = sqlDal.Execute_SP();

                DataTable firstTable = ds.Tables[0];

                int ShoppingListID = -1;

                if (firstTable.Rows.Count != 0)
                {
                    //Get values from DataTable result
                    DataRow result = firstTable.Rows[0];

                    ShoppingListID = Convert.ToInt32(result["ShoppingListID"]);    
                }

                //  int ShoppingListID = Helper.ConvertDataTableToObject<int>(firstTable)[0];

                return ShoppingListID;
            }

            catch (Exception ex)
            {
                Logger.Error(ex);

                return -1;

            }
        }

        public string DeleteProduct(ShoppingListDeleteRequest productToDelete)
        {
            try
            {
                DataSet ds = new DataSet();

                Dictionary<string, string> sqlInParameters = new Dictionary<string, string>();

                sqlInParameters.Add("@UserID", productToDelete.UserID);
                sqlInParameters.Add("@ShoppingListID", productToDelete.ShoppingListID.ToString());
                sqlInParameters.Add("@ItemID", productToDelete.ItemID.ToString());
                sqlInParameters.Add("@Quantity", productToDelete.Quantity.ToString());
            //    sqlInParameters.Add("@IndexToDelete", productToDelete.IndexToDelete.ToString());


                DataAccess sqlDal = new DataAccess("dbo.DeleteProduct", sqlInParameters);

                ds = sqlDal.Execute_SP();

                DataTable firstTable = ds.Tables[0];

                string userId = string.Empty;

                if (firstTable.Rows.Count != 0)
                {
                    //Get values from DataTable result
                    DataRow result = firstTable.Rows[0];

                    userId = result["userID"].ToString();
                }

                //  int ShoppingListID = Helper.ConvertDataTableToObject<int>(firstTable)[0];

                return userId;
            }

            catch (Exception ex)
            {
                Logger.Error(ex);

                return ex.ToString();

            }
        }


        public int UpdateQuantityOfProduct(ShoppingListUpdateQuantityRequest updateProduct)
        {
            try
            {
                DataSet ds = new DataSet();

                Dictionary<string, string> sqlInParameters = new Dictionary<string, string>();

                sqlInParameters.Add("@ShoppingListID", updateProduct.ShoppingListID.ToString());
                sqlInParameters.Add("@ItemID", updateProduct.ItemID.ToString());
                sqlInParameters.Add("@Quantity", updateProduct.Quantity.ToString());


                DataAccess sqlDal = new DataAccess("dbo.UpdateProductQuantity", sqlInParameters);

                ds = sqlDal.Execute_SP();

                DataTable firstTable = ds.Tables[0];

                int ShoppingListID = -1;

                if (firstTable.Rows.Count != 0)
                {
                    //Get values from DataTable result
                    DataRow result = firstTable.Rows[0];

                    ShoppingListID = Convert.ToInt32(result["ShoppingListID"]);
                }

                //  int ShoppingListID = Helper.ConvertDataTableToObject<int>(firstTable)[0];

                return ShoppingListID;
            }

            catch (Exception ex)
            {
                Logger.Error(ex);

                return -1;

            }
        }
    }
}
