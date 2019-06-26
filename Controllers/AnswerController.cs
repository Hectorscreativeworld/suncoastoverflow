using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using suncoastoverflow.Models;

namespace suncoastoverflow.Controllers
{
  [Route("api/[controller]")]
  public class AnswerController : Controller
  {
    [HttpPost("new")]
    public ActionResult<Answer> PostSampleAnswers([FromBody] Answer stuff)
    {
      var db = new DatabaseContext();
      db.AnswersTable.Add(stuff);
      db.SaveChanges();
      return stuff;
    }


  }
}
