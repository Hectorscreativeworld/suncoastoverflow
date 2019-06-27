import React, { Component } from 'react'

class AnsweredHomePage extends Component {
  render() {
    return (
      <div>
        <span className="d-block p-2 bg-primary text-white">d-block</span>

        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea class="form-control" rows="5" id="comment" />
        </div>
      </div>
    )
  }
}

export default AnsweredHomePage
