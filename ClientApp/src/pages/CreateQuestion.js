import React, { Component } from 'react'

class CreateQuestion extends Component {
  render() {
    return (
      <div>
        <header>Create a question</header>
        <form>
          <textarea>
            <button>Submit</button>
          </textarea>
        </form>
      </div>
    )
  }
}

export default CreateQuestion
