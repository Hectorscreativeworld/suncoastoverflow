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
      if (stuff == null)
      {
        System.Console.WriteLine("stuff is null");
      }
      else
      {
        var db = new DatabaseContext();
        db.AnswersTable.Add(stuff);
        db.SaveChanges();
      }

      return stuff;
    }
    [HttpGet("all")]
    public ActionResult<List<Answer>> GetAllAnswers()
    {
      var db = new DatabaseContext();
      // need some kind of includes statement below this comment
      // to pull in the numb er of answers it has but I'm lost on 
      // how to approach the logic to do that - dante
      var everything = db.AnswersTable;
      return everything.ToList();
    }


  }
}
