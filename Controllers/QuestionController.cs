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
      db.SaveChanges();
      return data;
    }
    [HttpGet("all")]
    public ActionResult<List<Question>> GetAllQuestions()
    {
      var db = new DatabaseContext();
      // need some kind of includes statement below this comment
      // to pull in the numb er of answers it has but I'm lost on 
      // how to approach the logic to do that - dante
      var everything = db.QuestionsTable;
      return everything.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<FullQuestionModel> GetQuestion([FromRoute]int id)
    {
      var db = new DatabaseContext();
      // need some kind of includes statement below this comment
      // to pull in the numb er of answers it has but I'm lost on 
      // how to approach the logic to do that - dante
      var question = db.QuestionsTable.FirstOrDefault(q => q.ID == id);
      var answers = db.AnswersTable.Where(a => a.QuestionID == id).ToList();
      return new FullQuestionModel
      {
        TheQuestion = question,
        Answers = answers

      };
    }

    [HttpGet("unanswered")]
    public ActionResult<List<Question>> GetUnansweredQuestions()
    {
      var db = new DatabaseContext();
      var all = db.QuestionsTable.Where(w => w.Answered == false);
      return all.ToList();
    }
    [HttpPut("{id}")]
    public ActionResult<Question> PutData([FromRoute]int id, [FromBody] Question data)
    {
      var db = new DatabaseContext();
      var question = db.QuestionsTable.FirstOrDefault(q => q.ID == id);
      question.QuestionBody = data.QuestionBody;
      question.QuestionTitle = data.QuestionTitle;
      db.SaveChanges();
      return data;
    }

  }
}
