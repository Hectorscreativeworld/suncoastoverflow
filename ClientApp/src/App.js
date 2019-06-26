import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import AnsweredHomePage from './components/Pages/AnsweredHomePage'
import AskAQuestionHomePage from './components/Pages/AskAQuestionHomePage'

import Home from './components/Pages/Home'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="AnsweredHomePage" component={AnsweredHomePage} />
        <Route
          exact
          path="AskAQuestionHomePage"
          component={AskAQuestionHomePage}
        />
      </Layout>
    )
  }
}
