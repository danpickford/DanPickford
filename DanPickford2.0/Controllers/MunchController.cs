using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DanPickford2._0.Controllers
{
    public class MunchController : Controller
    {
        //
        // GET: /Munch/

        public ActionResult Index()
        {
            return View();
        }
        //
        // GET: /Munch/GameStart

        public ActionResult GameStart()
        {
            return View();
        }

    }
}
