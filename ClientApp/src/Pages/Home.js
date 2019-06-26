import React, { Component } from 'react'

import Questions from '../components/Questions.js'
import TopQuestions from './TopQuestions'
import Axios from 'axios'

class Home extends Component {
  state = {
    questionTitle: ''
  }
  componentDidMount() {
    Axios.get('/api/question/unanswered').then(resp => {
      this.setState({
        questionTitle: resp.data.questiontitle
      })
    })
  }

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
