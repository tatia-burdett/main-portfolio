import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Photography from './Photography'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <Photography />
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)
})