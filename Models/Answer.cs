using System;

namespace suncoastoverflow.Models
{
  public class Answer
  {
public string AnswerBody { get; set; }
public int AnswerVote { get; set; }
public int? QuestionID { get; set; }
public Question Question { get; set; }
  }
}