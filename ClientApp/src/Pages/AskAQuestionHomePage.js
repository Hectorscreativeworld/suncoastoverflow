import React, { Component } from 'react'

import './AskAQuestionCss_Page.css'
// import RandomTechNews from '../components/RandomTechNews'

class AskAQuestionHomePage extends Component {
  render() {
    return (
      <section className="topContainer">
        <div className="mainContainer">
          <div className="form-group">
            <label for="comment">Ask me question:</label>
            <textarea className="form-control" rows="5" id="comment" />
            <button type="button" className="btn btn-primary submitBtn">
              submit
            </button>
          </div>
        </div>
        {/* <RandomTechNews /> */}
      </section>
    )
  }
}

export default AskAQuestionHomePage
