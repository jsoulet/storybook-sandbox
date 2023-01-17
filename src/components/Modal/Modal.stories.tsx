import React from "react";
import Modal, {Props} from "./Modal";
import { Story, Meta } from '@storybook/react';
import { screen, userEvent, within } from "@storybook/testing-library"
import { expect } from "@storybook/jest";

export default {
  title: "Modal",
  component: Modal,
  args: {
    children: "Content",
    renderHandler: ({setIsActive}) => <button data-testid="show-modal" onClick={() => setIsActive(true)}>Show the modal</button>,
    title: 'Title',
    footer: 'Footer',
  },
} as Meta<Props>;

const Template: Story<Props> = (args) => <Modal {...args} />;

export const Default = Template.bind({});

export const Open = Template.bind({})
Open.play = async ({args, canvasElement}) => {
  const canvas = within(canvasElement)
  const modalButton = canvas.getByTestId('show-modal')
  await userEvent.click(modalButton)
  expect(screen.getByText(String(args.title))).toBeInTheDocument()
}

export const Close = Template.bind({})
Close.play = async (context) => {
  await Open.play?.(context)
  const closeModalButton = await screen.getByTestId('modal-close')
  const modalTitle =  await screen.getByText(String(context.args.title))
  await userEvent.click(closeModalButton)
  expect(modalTitle).not.toBeInTheDocument()
  expect(context.args.onClose).toBeCalled()
}

