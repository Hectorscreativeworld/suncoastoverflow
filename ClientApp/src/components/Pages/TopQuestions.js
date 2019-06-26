import React, { Component } from 'react'
import './TopQuestions.css'

class TopQuestions extends Component {
  render() {
    return (
      <div>
        <section className="Top-Question-ask-Btn">
          <h1 className="TopQuestionText">Top Questions</h1>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          >
            Ask Question
          </button>
        </section>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary">
            Left
          </button>
          <button type="button" class="btn btn-secondary">
            Middle
          </button>
          <button type="button" class="btn btn-secondary">
            Right
          </button>
        </div>
      </div>
    )
  }
}

export default TopQuestions
