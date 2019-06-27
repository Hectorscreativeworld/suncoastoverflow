import React, { Component } from 'react'
// import { Route } from 'react-router'
import { BrowserRouter as Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import AnsweredHomePage from './pages/AnsweredHomePage.js'
import AskAQuestionHomePage from './pages/AskAQuestionHomePage.js'
import Home from './pages/Home'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/AnsweredHomePage" component={AnsweredHomePage} />
        <Route
          exact
          path="/AskAQuestionHomePage"
          component={AskAQuestionHomePage}
        />
      </Layout>
    )
  }
}
