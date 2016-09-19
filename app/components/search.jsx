require("./search.scss")

import React from 'react'

let Search = React.createClass({
  render: () => {
    return (
      <div>
        <div className="search">this is search area</div>
        <div id="footer">footer</div>
      </div>
    )
  }
})

module.exports = Search
