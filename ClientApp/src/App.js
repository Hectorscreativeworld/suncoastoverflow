import React, { Component } from 'react'
import { Route } from 'react-router'
import { Layout } from './components/Layout'
import CreateQuestion from './pages/CreateQuestion'
import Home from './components/Pages/Home'


export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/createquestion" component={CreateQuestion} />

      </Layout>
    )
  }
}
