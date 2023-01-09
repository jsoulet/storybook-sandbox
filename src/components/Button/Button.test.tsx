import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as stories from './Button.stories'

import { composeStories } from '@storybook/testing-react'
const { Default } = composeStories(stories);

test('<Button />', () => {
  const {getByText} = render(<Default />)
  const buttonElement = getByText(Default.args?.label || '')
  expect(buttonElement).toBeInTheDocument()
})