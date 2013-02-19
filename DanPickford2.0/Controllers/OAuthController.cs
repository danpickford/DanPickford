using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DanPickford2._0.Models;
using DotNetOpenAuth.OAuth;
namespace DanPickford2._0.Controllers
{
    public class OAuthController : Controller
    {
        //
        // GET: /OAuth/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult StartOAuth()
        {
            smugmug myMug = new smugmug();

            var serviceProvider = myMug.GetServiceDescription();
            var consumer = new WebConsumer(serviceProvider, myMug.InMemoryTokenManager);

            // Url to redirect to
            var authUrl = new Uri(Request.Url.Scheme + "://" + Request.Url.Authority + "/OAuth/OAuthCallBack/");

            // request access
            
            consumer.Channel.Send(consumer.PrepareRequestUserAuthorization(authUrl, null, null));
            
            // This will not get hit!
            return null;
        }
        public ActionResult OAuthCallback()
        {
            smugmug myMug = new smugmug();
            // Process result from the service provider
            var serviceProvider = myMug.GetServiceDescription();
            var consumer = new WebConsumer(serviceProvider, myMug.InMemoryTokenManager);
            var accessTokenResponse = consumer.ProcessUserAuthorization(this.HttpContext.Request);
            var test = this.HttpContext.Request;
            // If we didn't have an access token response, this wasn't called by the service provider
            if (accessTokenResponse == null)
                return RedirectToAction("Index");

            // Extract the access token
            string accessToken = accessTokenResponse.AccessToken;

            ViewBag.Token = accessToken;
            ViewBag.Secret = myMug.InMemoryTokenManager.GetTokenSecret(accessToken);
            return View();
        }


    }
}
