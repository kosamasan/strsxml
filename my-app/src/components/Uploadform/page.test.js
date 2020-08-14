import React from 'react'
import UploadForm from './index'

it('renders succesfully', () => {
  const uploadForm = <UploadForm />
  expect(uploadForm).toMatchSnapshot()
})