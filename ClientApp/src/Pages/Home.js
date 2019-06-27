import React, { Component } from 'react'

import Questions from '../components/Questions.js'
import TopQuestions from '../components/TopQuestions'
import Axios from 'axios'

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
