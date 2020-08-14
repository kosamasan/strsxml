import React from 'react'
import Results from './index'

it('renders succesfully', () => {
  const results = <Results />
  expect(results).toMatchSnapshot()
})