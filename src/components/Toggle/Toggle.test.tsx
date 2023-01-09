import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as stories from './Toggle.stories'
import { composeStories } from '@storybook/testing-react'
const { Default } = composeStories(stories);

test('<Button />', () => {
	const {getByLabelText, getByText} = render(<Default />)

	fireEvent.click(getByText(Default.args?.label || ''))
	expect(getByLabelText(Default.args?.label || '')).toBeChecked()
})