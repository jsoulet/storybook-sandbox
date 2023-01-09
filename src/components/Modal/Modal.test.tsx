import React from 'react'
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { fireEvent } from '@testing-library/react';
import * as stories from './Modal.stories';
const { Default } = composeStories(stories);

describe('Modal', () => {
  it('should show the modal', () =>{
    const { getByTestId, getByText } = render(<Default />);
    const showModalButton = getByTestId('show-modal')
    expect(showModalButton).toBeInTheDocument()
    fireEvent.click(showModalButton)
    expect(getByTestId('modal-container')).toBeInTheDocument()
    expect(getByText('Title')).toBeInTheDocument()
    expect(getByText('Footer')).toBeInTheDocument()
  })

  it('should hide the modal when clicking on overlay', () =>{
    const { getByTestId } = render(<Default />);
    const showModalButton = getByTestId('show-modal')
    fireEvent.click(showModalButton)
    const modalContainer = getByTestId('modal-container')
    const modalOverlay = getByTestId('modal-overlay')
    fireEvent.click(modalOverlay)
    expect(modalContainer).not.toBeInTheDocument()
  })
})