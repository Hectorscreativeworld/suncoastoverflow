import React, { Component } from 'react'
import '../TopQuestions.css'

class TopQuestions extends Component {
  render() {
    return (
      <div>
        <section className="Top-Question-ask-Btn">
          <h3 className="TopQuestionText">Top Questions</h3>
          <button
            type="button"
            className="ask-btn btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          >
            Ask Question
          </button>
        </section>

        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary">
            interesting
          </button>
          <button type="button" class="btn btn-secondary">
            Featured
          </button>
          <button type="button" class="btn btn-secondary">
            Hot
          </button>
          <button type="button" class="btn btn-secondary">
            Week
          </button>
          <button type="button" class="btn btn-secondary">
            Month
          </button>
        </div>
      </div>
    )
  }
}

export default TopQuestions
