import React from "react";
import Button, { Props } from "./Button";
import { Story, Meta } from '@storybook/react';

export default {
  title: "Button",
  component: Button,
  args: {
    label: "Click me",
    variant: "primary",
    size: "medium",
    onClick: () => {}
  },
  argTypes: {
    size: {
      control: { type: "select" }
    }
  }
} as Meta<Props>;

const Template:Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
