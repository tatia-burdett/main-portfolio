import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import SingleProject from './SingleProject'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <SingleProject />
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)
})