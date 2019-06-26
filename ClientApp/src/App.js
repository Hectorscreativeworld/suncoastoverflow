import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import AnsweredHomePage from './Pages/AnsweredHomePage'
import AskAQuestionHomePage from './Pages/AskAQuestionHomePage'

import Home from './Pages/Home'

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
