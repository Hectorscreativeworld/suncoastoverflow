import React, { Component } from 'react'
import './Questions.css'

class Questions extends Component {
  render() {
    const questions = [
      {
        title:
          'Foreign Key association with pre-exisitng table cant find table',
        votes: 0,
        answers: 0,
        views: 1,
        tags: ['python', 'Flask', 'c#']
      },
      {
        title:
          'How can I connect the ends of edges in order to close the hole between them?',
        votes: 6,
        answers: 2,
        views: 55,
        tags: ['python', 'HTML', 'F#']
      }
    ]
    const allQuestions = questions.map(question => (
      <div className="d-flex   Question-Container">
        <div className="d-flex Vav-Container">
          <div className="Vote-Container">{question.votes}</div>
          <div className="Answer-Container">{question.answers}</div>
          <div className="Views-Container">{question.views}</div>
        </div>
        <hr />
        <div className="Question-Title-Container">
          <div className="Question-Title">{question.title}</div>
        </div>
      </div>
    ))

    return <div>{allQuestions}</div>
  }
}

export default Questions
