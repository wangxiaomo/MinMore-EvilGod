require("./app/global.scss")

var React = require("react"),
  ReactDom = require("react-dom")

import Search from './app/components/search.jsx'

ReactDom.render(
  <Search />,
  document.getElementById('page')
)
