import React, { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form className="card card-sm">
              <div className="p-1 card-body row no-gutters align-items-center">
                <div className="col-auto">
                  <i className="fas fa-search" />
                </div>

                <div className="col">
                  <input
                    className="form-control form-control-lg form-control-borderless"
                    type="search"
                    placeholder="Search topics or keywords"
                  />
                </div>

                <div className="col-auto">
                  <button
                    className="btn-search p-0 btn btn-lg btn-success"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
