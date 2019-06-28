import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './NavMenu.css'

export class NavMenu extends Component {
  state = {
    questions: [],
    searchTerm: ''
  }

  render() {
    const getSearchResults = e => {
      e.preventDefault()
      axios
        .get('/api/search/questions?searchTerm=' + this.state.searchTerm)
        .then(resp => {
          this.setState({
            questions: resp.data
          })
          console.log(this.state.questions)
        })
    }

    return (
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Suncoast OverFlow
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Questions
              </a>
            </li>
            <li class="nav-item dropdown">
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider" />
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="https://suncoast.io/">
                SDG
              </a>
            </li>
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={getSearchResults}
          >
            <input
              class="form-control mr-sm-2"
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={this.state.searchTerm}
              onChange={e =>
                this.setState({
                  searchTerm: e.target.value
                })
              }
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    )
  }
}
