import React, { Component } from './node_modules/react'
import Conversation from '../components/Conversation'

class AnsweredHomePage extends Component {
  render() {
    return (
      <div>
        <Conversation />
        <span className="d-block p-2 bg-primary text-white">d-block</span>

        <div class="form-group">
          <label for="comment">Ask me Question:</label>
          <textarea class="form-control" rows="5" id="comment" />
        </div>
      </div>
    )
  }
}

export default AnsweredHomePage
