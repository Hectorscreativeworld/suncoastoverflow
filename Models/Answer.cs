using System;

namespace suncoastoverflow.Models
{
  public class Answer
  {
    public int ID { get; set; }
    public string AnswerBody { get; set; }
    public int AnswerVote { get; set; }
    public int? QuestionID { get; set; }
    public Question Question { get; set; }
  }
}