using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using suncoastoverflow.Models;

namespace suncoastoverflow.Controllers
{
  [Route("api/[controller]")]
  public class QuestionController : Controller
  {
    [HttpPost("new")]
    public ActionResult<Question> PostSampleData([FromBody] Question data)
    {
      var db = new DatabaseContext();
      db.QuestionsTable.Add(data);
      return data;
    }
    [HttpGet]
    public ActionResult<List<Question>> GetUnansweredQuestions()
    {
      var db = new DatabaseContext();
      var all = db.QuestionsTable.Where(w => w.Answered == false);
      return all.ToList();
    }

  }
}
