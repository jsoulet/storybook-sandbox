import React from "react";
import LoginForm, {Props} from "./LoginForm";
import { Story, Meta } from '@storybook/react';
import { screen, userEvent, within } from "@storybook/testing-library"
import { expect } from "@storybook/jest";

export default {
  title: "LoginForm",
  component: LoginForm,
  argTypes: {
    onSubmit: { action: true },
  },
} as Meta<Props>;

const Template: Story<Props> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.play = async ({args, canvasElement}) => {
  const CREDENTIALS = {
    email: 'john.doe@email.com',
    password: 'azerty1234'
  }
  const canvas = within(canvasElement)
  const emailInput = await canvas.findByLabelText('Email')
  await userEvent.type(emailInput, CREDENTIALS.email, {delay: 100})
  const passwordInput = await canvas.findByLabelText('Password')
  await userEvent.type(passwordInput, CREDENTIALS.password, {delay: 100})
  const loginButton = canvas.getByText('Login')
  await userEvent.click(loginButton)
  expect(args.onSubmit).toBeCalledWith(CREDENTIALS)
}
