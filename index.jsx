require("./app/global.scss")

import React from 'react'
import ReactDom from 'react-dom'

import Search from './app/components/search.jsx'

ReactDom.render(
  <Search />,
  document.getElementById('page')
)
