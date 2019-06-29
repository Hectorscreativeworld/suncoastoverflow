import React, { Component } from 'react'
import './Questions.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class Questions extends Component {
  state = {
    questions: []
  }
  componentDidMount() {
    Axios.get('/api/question/all').then(resp => {
      console.log(resp.data)
      this.setState({
        questions: resp.data,
        title: resp.data.questionTitle
      })
    })
  }
  render() {
    const allQuestions = this.state.questions.map(question => (
      <div className="d-flex   Question-Container" key={question.id}>
        <div className="d-flex Vav-Container">
          <div className="Vote-Container">
            {question.questionVote}
            <div className="SpanVotes">votes </div>
          </div>
          <div className="Answer-Container">
            {question.answered === true ? <p>Yes</p> : <p>No</p>}
            <div className="SpanAnswer">Answered?</div>
          </div>

          <div className="Views-Container">
            {/* {question.views} */}5<div className="SpanViews">views</div>
          </div>
        </div>

        <div className="Question-Title-Container">
          <div className="Question-Title">
            <Link
              key={question.id}
              to={`../Pages/AnsweredHomePage/${question.id}`}
            >
              {question.questionTitle}
            </Link>
          </div>
        </div>
      </div>
    ))

    return <div>{allQuestions}</div>
  }
}

export default Questions
