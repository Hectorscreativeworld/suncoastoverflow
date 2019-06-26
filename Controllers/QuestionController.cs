using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using suncoastoverflow.Models;

namespace suncoastoverflow.Controllers
{
  [Route("api/[controller]")]
  public class SampleDataController : Controller
  {
    [Route("api/[controller]")]
    public class QuestionController : Controller
    {
      [HttpGet]
      public ActionResult<List<Question>> GetUnansweredQuestions()
      {
        var db = new DatabaseContext();
        var all = db.QuestionsTable.Where(w => w.Answered == false);
        return all.ToList();
      }

    }
  }
