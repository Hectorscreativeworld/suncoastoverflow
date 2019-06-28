import React, { Component } from 'react'

class Conversation extends Component {
  render() {
    return (
      <div>
        <div className="media">
          <div className="media-left">
            <img
              src="img_avatar1.png"
              className="media-object"
              // style="width:60px"
            />
          </div>
          <div className="media-body">
            <h4 className="media-heading">John Doe</h4>
            <p>Lorem ipsum...</p>
          </div>
        </div>

        {/* <!-- Right-aligned --> */}
        <div className="media">
          <div className="media-body">
            <h4 class="media-heading">John Doe</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="media-right">
            <img
              src="img_avatar1.png"
              class="media-object"
              // style="width:60px"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Conversation
