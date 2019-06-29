using System.Collections.Generic;


namespace suncoastoverflow.Models
{
  public class FullQuestionModel
  {
    public Question TheQuestion { get; set; }
    public List<Answer> Answers { get; set; }
  }
}