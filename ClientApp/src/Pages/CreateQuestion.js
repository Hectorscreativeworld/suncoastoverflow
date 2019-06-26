import React, { Component } from 'react'

class CreateQuestion extends Component {
  render() {
    return (
      <div>
        <header>Create a question</header>
        <form>
          <input placeholder="Title goes here." />
          <textarea>
            <button>Submit</button>
          </textarea>
        </form>
      </div>
    )
  }
}

export default CreateQuestion
