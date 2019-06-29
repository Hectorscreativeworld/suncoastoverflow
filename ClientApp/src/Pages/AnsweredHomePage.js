import React, { Component } from 'react'
import Axios from 'axios'

class AnsweredHomePage extends Component {
  state = {
    question: null
  }
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    let id = this.props.match.params.id
    Axios.get(`/api/question/${id}`).then(resp => {
      console.log(resp.data)
      this.setState({
        question: resp.data
      })
    })
  }
  render() {
    if (this.state.question) {
      let answers = null
      if (this.state.question.answers) {
        answers = this.state.question.answers.map(answer => {
          return (
            <div key={answer.id}>
              <div>{answer.answerBody}</div>
              <div>{answer.answerVote}</div>
            </div>
          )
        })
      }

      return (
        <div>
          <div>{this.state.question.theQuestion.questionTitle}</div>
          <div>{this.state.question.theQuestion.questionBody}</div>
          <div>{this.state.question.theQuestion.questionVote}</div>
          <h1>Answers</h1>
          {answers}
        </div>
      )
    } else {
      return null
    }
  }
}

export default AnsweredHomePage

// public int ID { get; set; }
// public string AnswerBody { get; set; }
// public int AnswerVote { get; set; }
// public int? QuestionID { get; set; }
// public Question Question { get; set; }

// public int ID { get; set; }
// public string QuestionTitle { get; set; }
// public string QuestionBody { get; set; }
// public int QuestionVote { get; set; }
// public bool Answered { get; set; }
