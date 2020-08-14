import React from 'react'
import Home from './Home'

it('renders succesfully', () => {
  const homePage = <Home />
  expect(homePage).toMatchSnapshot()
})