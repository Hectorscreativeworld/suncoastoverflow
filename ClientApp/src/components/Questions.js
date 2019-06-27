import React, { Component } from 'react'
import './Questions.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class Questions extends Component {
  state = {
    elephant: []
  }
  componentDidMount() {
    Axios.get('/api/question/all').then(resp => {
      console.log(resp.data)
      this.setState({
        elephant: resp.data,
        title: resp.data.questionTitle
      })
    })
  }
  render() {
    // const questions = [
    //   {
    //     title: 'test data',
    //     votes: 0,
    //     answers: 0,
    //     views: 1,
    //     tags: ['python', 'Flask', 'c#']
    //   },
    //   {
    //     title:
    //       'How can I connect the ends of edges in order to close the hole between them?',
    //     votes: 6,
    //     answers: 2,
    //     views: 55,
    //     tags: ['python', 'HTML', 'F#']
    //   }
    // ]

    const allQuestions = this.state.elephant.map(question => (
      <div className="d-flex   Question-Container">
        <div className="d-flex Vav-Container">
          <div className="Vote-Container">
            {question.questionVote}
            <span className="SpanVotes">votes </span>
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
            <Link to="/AnsweredHomePage">{question.questionTitle}</Link>
          </div>
        </div>
      </div>
    ))

    return <div>{allQuestions}</div>
  }
}

export default Questions
