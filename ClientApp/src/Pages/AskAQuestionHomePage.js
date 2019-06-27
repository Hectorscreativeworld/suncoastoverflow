import React, { Component } from 'react'
import oracal from '../Images/oracal.gif'
import './AskAQuestionCss_Page.css'

class AskAQuestionHomePage extends Component {
  render() {
    console.log(oracal)
    return (
      <div className="mainContainer">
        <div className="form-group">
          <label for="comment">Ask me question:</label>
          <textarea className="form-control" rows="5" id="comment" />
          <button type="button" className="btn btn-primary submitBtn">
            submit
          </button>
        </div>

        {/* <div className="wiseMan">
          <img src={oracal} alt="oracal" />
        </div> */}
      </div>
    )
  }
}

export default AskAQuestionHomePage
