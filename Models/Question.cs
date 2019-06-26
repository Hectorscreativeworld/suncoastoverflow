using System;

namespace suncoastoverflow.Models
{
  public class Question
  {
public string QuestionTitle { get; set; }
public string QuestionBody { get; set; }
public int QuestionVote { get; set; }
public bool Answered { get; set; }
  }
}