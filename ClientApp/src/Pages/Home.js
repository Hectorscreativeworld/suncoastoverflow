import React, { Component } from './node_modules/react'

import Questions from '../components/Questions.js'
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
