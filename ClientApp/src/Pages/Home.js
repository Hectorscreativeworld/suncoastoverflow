import React, { Component } from 'react'
import Questions from '../components/Questions'
import TopQuestions from '../components/TopQuestions'

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
