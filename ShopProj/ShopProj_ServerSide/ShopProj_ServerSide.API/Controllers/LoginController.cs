using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using ShopProj_ServerSide.Business.Services;
using ShopProj_ServerSide.DAL.Requests;
using ShopProj_ServerSide.DAL.Response;

namespace ShopProj_ServerSide.API.Controllers
{
    //[EnableCors(origins: "*", headers: "*", methods: "*")]

    public class LoginController : ApiController
    {
        private static readonly log4net.ILog Logger = log4net.LogManager.GetLogger(typeof(LoginController));

        LoginService loginService = new LoginService();

        // api/Login/AuthenticateLogIn
        [HttpPost]

        public HttpResponseMessage AuthenticateLogIn([FromBody] LoginRequest user)
        {
            try
            {
                 LoginResponse response = loginService.AuthenticateLogIn(user);
                
                 return Request.CreateResponse(HttpStatusCode.OK, response);
            }

            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
