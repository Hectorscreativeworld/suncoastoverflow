import React, { Component } from 'react'

import Questions from '../components/Questions.js'
import TopQuestions from './TopQuestions'
import Axios from 'axios'

class Home extends Component {
  state = {
    elephant: []
  }
  componentDidMount() {
    Axios.get('/api/question/unanswered').then(resp => {
      console.log(resp.data)
      this.setState({
        elephant: resp.data

      })
    })
  }

  render() {
    return (
      <div>
        <TopQuestions />
        <Questions />
        <ul>
          {this.state.elephant.map(m => {
            return <li>{m.questionTitle}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Home
