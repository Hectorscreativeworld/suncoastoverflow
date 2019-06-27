import React, { Component } from 'react'
import wiseMan from '../Images/wiseMan.png'
import './AskAQuestionCss_Page.css'

class AskAQuestionHomePage extends Component {
  render() {
    console.log(wiseMan)
    return (
      <div className="mainContainer">
        <div className="form-group">
          <label for="comment">Ask me question:</label>
          <textarea className="form-control" rows="5" id="comment" />
          <button type="button" className="btn btn-primary submitBtn">
            submit
          </button>
        </div>

        <div className="wiseMan">
          <img src={wiseMan} alt="wise man" />
        </div>
      </div>
    )
  }
}

export default AskAQuestionHomePage
