import React, { Component } from 'react'
import Questions from '../Questions'
import TopQuestions from './TopQuestions'

class Home extends Component {
  render() {
    return (
      <div>
        <TopQuestions />
        <Questions />
      </div>
    )
  }
}

export default Home
